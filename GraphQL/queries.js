import {gql} from '@apollo/client';

export const GET_BOSS = gql`
  query {
    boss {
      id
      name
      image
    }
  }
`;

export const GET_ENTITY = type => {
  return gql`
    query {
      ${type} {
        id
        name
        image
      }
    }
  `;
};

export const GET_INFO = (type, id) => {
  return gql`query{ ${type}(id:"${id}") ${REST[type]} }`;
};

const REST = {
  boss: `{id,
    name,
    description,
    location,
    drops,
    healthPoints
    image}`,
  weapon: `{
    id,
    name,
    category,
    description,
    attack
  }`,
};
