import {gql} from '@apollo/client';

export const GET_INCANTATIONS = gql`
  query Incantations {
    incantation(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_INCANTATION_DETAILS = (id: string) => gql`
  query IncantationDetails {
    getIncantation(id: "${id}") {
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
