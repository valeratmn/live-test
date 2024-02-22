import React from 'react';
import Card from '../Card/Card';
import { IRepository } from '../../types';
import './list.css';

interface IListProps {
  users: IRepository[];
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
