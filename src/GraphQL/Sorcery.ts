import {gql} from '@apollo/client';

export const GET_SORCERIES = gql`
  query Sorceries {
    sorcery(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_SORCERY_DETAILS = (id: string) => gql`
  query SorceryDetails {
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
