import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    loginWallet(user: { email: $email, password: $password }) {
      user {
        id
        email
        wallet
        lowercaseEmail
      }
      token
    }
  }
`;

export const LOGIN_WALLET_QUERY = gql`
  query LoginWallet($wallet: String!) {
    loginWallet(user: { wallet: $wallet }) {
      user {
        id
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

export const REGISTER_QUERY = gql`
  mutation createUser($wallet: String!,$email: String!,$password: String!) {
    createUser(
      createUserInput: {
        email: $email
        password: $password
        wallet: $wallet
      }
    ) {
      user {
        id
        email
        wallet
      }
      token
    }
  }
`;
