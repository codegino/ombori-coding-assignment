import { useEffect, useState } from 'react';
import PulseLoader from '../components/PulseLoader';
import { delay } from '../utils/delay';

const UsersPage = () => {
  const [showContent, setShowContent] = useState(false);

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
        <h1>Hello</h1>
      )}
    </main>
  );
};

export default UsersPage;
