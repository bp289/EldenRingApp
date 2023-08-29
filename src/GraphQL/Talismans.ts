import {gql} from '@apollo/client';

export const GET_TALISMANS = gql`
  query Talismans {
    talisman(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_TALISMAN_DETAILS = (id: string) => gql`
  query TalismanDetails {
    getTalisman(id: "${id}") {
      description
      effect
    } 
  }
`;
