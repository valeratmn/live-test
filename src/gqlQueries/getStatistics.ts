import { gql } from "@apollo/client";

export const GET_USER_STATISTICS = gql`
  query GetUserStats($login: String!) {
    userStats(login: $login) {
      posts
      followers
      following
    }
  }
`;
