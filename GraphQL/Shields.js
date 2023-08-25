import {gql} from '@apollo/client';

export const GET_SHIELDS = gql`
  query {
    shield(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_SHIELD_DETAILS = id => gql`
  query {
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
