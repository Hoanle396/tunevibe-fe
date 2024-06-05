import { gql } from "@apollo/client";

export const GET_MUSIC = gql`
  query getMusics($search: String!, $page: String!, $limit: String!) {
    getMusics(pagination: { search: $search, page: $page, limit: $limit }) {
      meta {
        page
        totalPages
        totalItems
      }
      data {
        name
        cover
        price
        limit
        play {
          count
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
