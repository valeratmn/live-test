import React from 'react';
import './App.css';
import List from './components/List/List';
import { useQuery } from '@apollo/client';
import {GET_USERS} from './gqlQueries/getUsers';

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;


  return (
    <div className='App'>
      {loading && <p>Loading</p>}
      {!loading && data && <List users={data.repositories} />}
    </div>
  );
}

export default App;
