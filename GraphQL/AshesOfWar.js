import {gql} from '@apollo/client';

export const GET_ASHES_OF_WAR = gql`
  query {
    ashOfWar(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_AOW_DETAILS = id => gql`
  query {
    getAshOfWar(id: ${id}) {
      description
      affinity
      skill
    }
  }
`;
