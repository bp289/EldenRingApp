import {gql} from '@apollo/client';

export const GET_BOSS = gql`
  query {
    boss(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_BOSS_DETAILS = id => gql`
  query {
    boss(id: "${id}") {
      description,
      location,
      region,
      drops,
      healthPoints,  
    }
  }
`;
