import {gql} from '@apollo/client';

export const GET_TALISMANS = gql`
  query {
    talisman(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_TALISMAN_DETAILS = id => gql`
  query {
    getTalisman(id: "${id}") {
      description
      effect
    }
  }
`;
