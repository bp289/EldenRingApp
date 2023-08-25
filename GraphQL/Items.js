import {gql} from '@apollo/client';

export const GET_ITEMS = gql`
  query {
    item(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_ITEM_DETAILS = id => gql`
  query {
    getItem(id: "${id}") {
      description
      effect
      type
    }
  }
`;
