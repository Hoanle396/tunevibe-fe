import { gql } from "@apollo/client";

export const GET_ALBUMS = gql`
  query getAlbums($pagination: Pagination!) {
    getAlbums(pagination: $pagination) {
      meta {
        totalItems
        limit
        page
        totalPages
      }
      data {
        name
        cover
        musics {
          name
          hash
        }
      }
    }
  }
`;

export const CREATE_ALBUM = gql`
  mutation createAlbum($input: CreateAlbumInput!) {
    createAlbum(input: $input) {
      name
      cover
    }
  }
`;
