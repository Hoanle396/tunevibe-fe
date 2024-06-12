import { gql } from "@apollo/client";

export const GET_VOTE = gql`
  query ($input: FindByMe!) {
    getVote(input: $input) {
      id
      rate
    }
  }
`;

export const VOTE = gql`
  mutation createVote($input: CreateVoteInput!) {
    createVote(input: $input) {
      id
      rate
    }
  }
`;
