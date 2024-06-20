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
        id
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
      id
      name
      createdAt
      updatedAt
      description
      user {
        email
        wallet
      }
      albums {
        name
        createdAt
        updatedAt
        cover
      }
    }
  }
`;
export const GET_MUSIC_BY_ARTIST = gql`
  query getMusicByArtist($id: String!) {
    getMusicByArtist(id: $id) {
      id
      name
      content
      hash
      cover
      price
      limit
      play {
        count
      }
      album {
        name
        cover
        artist {
          user {
            wallet
          }
          name
        }
      }
    }
  }
`;
