import { gql } from "@apollo/client";

export const GET_MUSIC = gql`
  query getMusics($search: String, $page: Float!, $limit: Float!) {
    getMusics(pagination: { search: $search, page: $page, limit: $limit }) {
      meta {
        page
        totalPages
        totalItems
      }
      data {
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
  }
`;

export const GET_MUSIC_BY_ID = gql`
  query getMusic($id: String!) {
    getMusic(id: $id) {
      id
      name
      content
      hash
      cover
      price
      limit
      createdAt
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

export const CREATE_MUSIC = gql`
  mutation createMusic($input: CreateMusicInput!) {
    create(createMusicInput: $input) {
      name
      id
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation createTransaction($input: UpdateTransaction!) {
    createTransaction(input: $input) {
      status
    }
  }
`;

export const GET_TRANSACTION = gql`
  {
    getTransaction(pagination: {}) {
      meta {
        limit
        page
        totalPages
        totalItems
      }
      data {
        id
        user {
          wallet
        }
        music {
          id
          name
          hash
          cover
          limit
          cover
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
    }
  }
`;
