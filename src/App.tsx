import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List/List';
import { IUser } from './types';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('https://api.github.com/repositories');
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className='App'>
      {isLoading && <p>Loading</p>}
      {!isLoading && users && <List users={users} />}
    </div>
  );
}

export default App;
