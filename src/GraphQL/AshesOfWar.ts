import {gql} from '@apollo/client';

export const GET_ASHES_OF_WAR = gql`
  query AshesOfWar {
    ashOfWar(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_AOW_DETAILS = (id: string) => gql`
  query AshesOfWarDetails{
    getAshOfWar(id: "${id}") {
      description
      affinity
      skill
    }
  }
`;
