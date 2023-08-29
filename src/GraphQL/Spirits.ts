import {gql} from '@apollo/client';

export const GET_SPIRITS = gql`
  query Spirits {
    spirit(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_SPIRIT_DETAILS = (id: string) => gql`
  query GetSprits {
    getSpirit(id: "${id}") {
      description
      fpCost
      hpCost
      effect
    }
  }
`;
