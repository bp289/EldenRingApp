import {gql} from '@apollo/client';

export const GET_SORCERIES = gql`
  query {
    sorcery(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_SORCERY_DETAILS = id => gql`
  query {
    getSorcery(id: "${id}") {
      id
      name
      image
      description
      cost
      slots
      effects
      requires {
        amount
        name
      }
    }
  }
`;
