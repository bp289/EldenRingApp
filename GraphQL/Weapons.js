import {gql} from '@apollo/client';

export const GET_WEAPONS = gql`
  query {
    weapon(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_WEAPON_DETAILS = id => {
  return gql`
    query {
      getWeapon(id: "${id}") {
        description
        category
        weight
        attack {
          name
          amount
        }
        defence {
          name
          amount
        }
        scalesWith {
          name
          scaling
        }
        requiredAttributes {
          amount
          name
        }
      }
    }
  `;
};
