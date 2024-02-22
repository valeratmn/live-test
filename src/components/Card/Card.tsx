import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import { IRepository } from "../../types";
import "./card.css";

interface ICardProps {
  user: IRepository;
}

export default function Card({
  user: {
    description,
    owner: { avatar_url, url, login },
  },
}: ICardProps) {
  const [isStatsVisible, setStatsVisible] = useState(false);

  const statisticsHandler = () => {
    setStatsVisible((state) => !state);
  };

  return (
    <div className="card">
      <div className="header">
        <img src={avatar_url} alt="avatar" />
        {login}
      </div>
      <div className="description">
        <p>{description}</p>
        <a href={url}>
          {url.split("https://api.github.com/users/")[1].toUpperCase()}
        </a>
      </div>
      <button onClick={statisticsHandler}>
        {isStatsVisible ? "Hide" : "Show stats"}
      </button>

      {isStatsVisible && <Statistics login={login} />}
    </div>
  );
}
