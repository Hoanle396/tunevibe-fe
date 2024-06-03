import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    getMe {
      name
      description
      id
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation createUpdateArtist($input: CreateArtistInput!) {
    createUpdateArtist(input: $input) {
      name
      description
    }
  }
`;
