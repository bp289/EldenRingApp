import {gql} from '@apollo/client';

export const GET_BOSS = gql`
  query Boss {
    boss(limit: 100) {
      id
      name
      image
      description
    }
  }
`;

export const GET_BOSS_DETAILS = gql`
  query BossDetails($id: String!) {
    getBoss(id: $id) {
      description
      location
      region
      drops
      healthPoints
    }
  }
`;
