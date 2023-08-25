import {gql} from '@apollo/client';

export const GET_NPCS = gql`
  query {
    npc(limit: 100) {
      id
      image
      location
    }
  }
`;

export const GET_NPC_DETAILS = id => gql`
  query {
    getNpc(id: "${id}") {
      description
      quote
      location
      role
    }
  }
`;
