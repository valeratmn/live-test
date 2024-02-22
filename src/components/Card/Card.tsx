import React, { useState } from 'react';
import { IStatistics, IUser } from '../../types';
import './card.css';
import axios from 'axios';
import Statistics from '../Statistics/Statistics';

interface ICardProps {
  user: IUser;
}

export default function Card({
  user: {
    description,
    owner: { avatar_url, url, login },
  },
}: ICardProps) {
  const [isStatsVisible, setStatsVisible] = useState(false);
  const [stats, setStats] = useState<IStatistics | null>(null);

  const getStatisctics = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${login}`);
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  const statisticsHandler = () => {
    if (!isStatsVisible) {
      getStatisctics();
    }
    setStatsVisible((state) => !state);
  };

  return (
    <div className='card'>
      <div className='header'>
        <img src={avatar_url} alt='avatar' />
        {login}
      </div>
      <div className='description'>
        <p>{description}</p>
        <a href={url}>
          {url.split('https://api.github.com/users/')[1].toUpperCase()}
        </a>
      </div>
      <button onClick={statisticsHandler}>
        {isStatsVisible ? 'Hide' : 'Show stats'}
      </button>
      {isStatsVisible && stats !== null && (
        <Statistics
          posts={stats.public_repos}
          followers={stats.followers}
          following={stats.following}
        />
      )}
    </div>
  );
}
