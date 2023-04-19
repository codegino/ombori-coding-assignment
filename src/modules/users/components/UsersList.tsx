import type { FC } from 'react';
import type { User } from '../../users.model';
import { useFetchUsers } from '../hooks/users.hook';
import UserCard from './UserCard';
import styles from './UsersList.module.css';
import { debounce } from '../../../utils/debounce';

const UsersList: FC<{ initialUsers: User[] }> = ({ initialUsers }) => {
  const { users, done, nextPage } = useFetchUsers(initialUsers);

  const handleScroll = debounce((event: React.UIEvent) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target as HTMLDivElement;
    if (scrollHeight - scrollTop === clientHeight) {
      nextPage();
    }
  }, 100);

  return (
    <div className={styles.container} onScroll={handleScroll} data-testid="users-list">
      <div className={styles.wrapper}>
        <div className={styles.header}>Users</div>

        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <UserCard user={user} />
              </li>
            );
          })}
        </ul>
        {!done && (
          <>
            <p>
              <em>
                I can use IntersectionObserver here, but it will be simpler to use a button for this
                exercise
              </em>
            </p>
            <button onClick={nextPage}>Fetch More</button>
          </>
        )}
        {done && <p>No more users to fetch</p>}
      </div>
    </div>
  );
};

export default UsersList;
