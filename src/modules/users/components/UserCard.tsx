import type { FC } from 'react';
import type { User } from '../../users.model';
import styles from './UserCard.module.css';

const UserCard: FC<{ user: User }> = ({ user }) => {
  return (
    <article aria-label="User Card" className={styles.container}>
      <img
        className={styles.profileImage}
        src={user.avatar}
        alt={user.first_name}
        height={100}
        width={100}
      />
      <div>
        {user.first_name} {user.last_name}
      </div>
    </article>
  );
};

export default UserCard;
