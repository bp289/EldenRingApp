import {gql} from '@apollo/client';
export const GET_ARMORS = gql`
  query {
    armor(limit: 100) {
      id
      name
      image
      category
    }
  }
`;

export const GET_ARMOR_DETAILS = id => gql`
  query {
    getArmor(id: ${id}) {
      description
      weight
      dmgNegation {
        name
        amount
      }
      resistance {
        name
        amount
      }
    }
  }
`;
