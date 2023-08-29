import {gql} from '@apollo/client';

export const GET_NPCS = gql`
  query NPCS {
    npc(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_NPC_DETAILS = (id: string) => gql`
  query NPCDetails {
    getNpc(id: "${id}") {
      description
      quote
      location
      role
    }
  }
`;
