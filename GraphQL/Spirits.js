import {gql} from '@apollo/client';

export const GET_SPIRITS = gql`
  query {
    spirit(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_SPIRIT_DETAILS = id => gql`
  query {
    getSpirit(id: "${id}") {
      description
      fpCost
      hpCost
      effect
    }
  }
`;
