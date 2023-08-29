import {gql} from '@apollo/client';

export const GET_ITEMS = gql`
  query Items {
    item(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_ITEM_DETAILS = (id: string) => gql`
  query ItemDetails{
    getItem(id: "${id}") {
      description
      effect
      type
    }
  }
`;
