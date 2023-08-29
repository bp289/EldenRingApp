import {gql} from '@apollo/client';

export const GET_CLASSES = gql`
  query Classes {
    class(limit: 20) {
      id
      name
      image
    }
  }
`;

export const GET_CLASS_DETAILS = (id: string) => gql`
  query ClassDetails{
    getClass(id: "${id}") {
      id
      name
      image
      description
      stats {
        level
        vigor
        mind
        endurance
        strenght
        dexterity
        inteligence
        faith
        arcane
      }
    }
  }
`;
