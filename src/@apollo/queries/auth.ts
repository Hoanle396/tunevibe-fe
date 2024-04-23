import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query Login {
    login(user: { email: "hoanle396@gmail.com", password: "hoanle396" }) {
      user {
        _id
        email
        wallet
        lowercaseEmail
      }
      token
    }
  }
`;

export const REFRESH_TOKEN = gql`
  {
    refreshToken
  }
`;
