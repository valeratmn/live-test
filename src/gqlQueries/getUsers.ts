import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    repositories {
      id
      owner {
        avatar_url
        url
        login
      }
      description
    }
  }
`;
