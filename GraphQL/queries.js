import {gql} from '@apollo/client';

export const GET_BOSS = gql`
  query {
    boss {
      id
      name
      description
      location
      drops
      healthPoints
      image
    }
  }
`;
