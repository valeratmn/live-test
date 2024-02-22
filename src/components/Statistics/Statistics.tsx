import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_STATISTICS } from "../../gqlQueries/getStatistics";
import "./statistics.css";

interface IStatisticsProps {
  login: string;
}

export default function Statistics({ login }: IStatisticsProps) {
  const { loading, error, data } = useQuery(GET_USER_STATISTICS, {
    variables: { login },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="statisticsBlock">
      <div>Posts {data.userStats.posts}</div>
      <div>Followers {data.userStats.followers}</div>
      <div>Following {data.userStats.following}</div>
    </div>
  );
}
