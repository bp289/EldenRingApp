import {gql} from '@apollo/client';

export const GET_CREATURES = gql`
  query {
    creature(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_CREATURE_DETAILS = id => gql`
  query {
    getCreature(id: "${id}") {
      id
      name
      image
      location
      description
      drops
    }
  }
`;
