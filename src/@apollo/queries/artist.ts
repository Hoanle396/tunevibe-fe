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

export const GET_ARTISTS = gql`
  {
    getArtists(pagination: {}) {
      data {
        name
        createdAt
        updatedAt
        description
        user {
          email
          wallet
        }
      }
      meta {
        totalPages
        limit
        page
        totalItems
      }
    }
  }
`;

export const GET_ARTIST = gql`
  query getArtist($id: String!) {
    getArtist(id: $id) {
      data {
        name
        createdAt
        updatedAt
        description
        user {
          email
          wallet
        }
      }
      meta {
        totalPages
        limit
        page
        totalItems
      }
    }
  }
`;
