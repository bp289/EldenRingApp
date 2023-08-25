import {gql} from '@apollo/client';

export const GET_INCANTATIONS = gql`
  query {
    incantation(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_INCANTATION_DETAILS = id => gql`
  query {
    getIncantation("${id}") {
      description
      type
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
