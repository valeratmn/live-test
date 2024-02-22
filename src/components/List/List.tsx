import React from 'react';
import { IUser } from '../../types';
import Card from '../Card/Card';
import './list.css';

interface IListProps {
  users: IUser[];
}

export default function List({ users }: IListProps) {
  return (
    <div className='container'>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}
