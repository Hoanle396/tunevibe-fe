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

export const CREATE_MUSIC = gql`
  mutation createMusic($input: CreateMusicInput!) {
    create(createMusicInput: $input) {
      name
      id
    }
  }
`;
