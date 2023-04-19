import { useEffect, useState } from 'react';
import type { User } from '../../users.model';

const USERS_API_URL = `https://reqres.in/api/users`;

export function useFetchUsers(initialUsers: User[] = []) {
  // We can use useReducer here, but no need to complicated things
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [users, setUsers] = useState<User[]>(initialUsers);

  // Run this when user does not provide initial users
  useEffect(() => {
    if (initialUsers.length === 0) {
      setLoading(true);
      fetch(`${USERS_API_URL}?page=1`)
        .then((res) => res.json())
        .then((res) => setUsers(res.data))
        .finally(() => setLoading(false));
    }
  }, [initialUsers.length]);

  useEffect(() => {
    if (page > 1) {
      setLoading(true);
      fetch(`${USERS_API_URL}?page=${page}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.data.length === 0) {
            setDone(true);
            return;
          }
          setUsers((prevUsers) => [...prevUsers, ...res.data]);
        })
        .finally(() => setLoading(false));
    }
  }, [page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    users,
    nextPage,
    done,
    loading,
  };
}
