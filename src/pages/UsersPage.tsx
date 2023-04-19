import { useEffect, useState } from 'react';
import PulseLoader from '../components/PulseLoader';
import UsersList from '../modules/users/components/UsersList';
import { delay } from '../utils/delay';
import { User } from '../modules/users.model';

const UsersPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  // Preload first page of users while showing the pulse loader
  // Not really necessary, but will make the app feel more performant
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=1`)
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    delay(3000).then(() => setShowContent(true));
  }, []);

  return (
    <main className="app">
      {!showContent ? (
        <div className="loader-container">
          <PulseLoader />
        </div>
      ) : (
        <UsersList initialUsers={users} />
      )}
    </main>
  );
};

export default UsersPage;
