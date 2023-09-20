import {gql} from '@apollo/client';

export const GET_SHIELDS = gql`
  query Shields {
    shield(limit: 100) {
      id
      name
      image
      category
    }
  }
`;

export const GET_SHIELD_DETAILS = (id: string) => gql`
  query ShieldDetails{
    getShield(id: "${id}") {
      description
      category
      weight
      attack {
        amount
        name
      }
      defence {
        amount
        name
      }
      scalesWith {
        scaling
        name
      }
      requiredAttributes {
        amount
        name
      }
    }
  }
`;
