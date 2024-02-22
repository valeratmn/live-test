import React from 'react';
import './statistics.css';

interface IStatisticsProps {
  posts: number;
  followers: number;
  following: number;
}

export default function Statistics({
  posts,
  followers,
  following,
}: IStatisticsProps) {
  return (
    <div className='statisticsBlock'>
      <div>Posts {posts}</div>
      <div>Followers {followers}</div>
      <div>Following {following}</div>
    </div>
  );
}
