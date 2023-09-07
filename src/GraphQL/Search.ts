import {gql} from '@apollo/client';

export const SEARCH_DATA = gql`
  query searchData {
    creature(limit: 40) {
      id
      name
      image
      __typename
    }
    location(limit: 40) {
      id
      name
      image
      __typename
    }
    boss(limit: 40) {
      id
      name
      image
      __typename
    }
    weapon(limit: 40) {
      id
      name
      image
      __typename
    }
  }
`;
