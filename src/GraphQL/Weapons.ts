import {gql} from '@apollo/client';

export const GET_WEAPONS = gql`
  query Weapons {
    weapon(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_WEAPON_DETAILS = (id: string) => {
  return gql`
    query WeaponDetails{
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
