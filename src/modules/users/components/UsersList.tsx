import type { FC } from 'react';
import type { User } from '../../users.model';
import UserCard from './UserCard';
import styles from './UsersList.module.css';

const UsersList: FC<{ initialUsers: User[] }> = ({ initialUsers }) => {
  return (
    <div className={styles.container} data-testid="users-list">
      <div className={styles.wrapper}>
        <div className={styles.header}>Users</div>

        <ul>
          {initialUsers.map((user) => {
            return (
              <li key={user.id}>
                <UserCard user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
