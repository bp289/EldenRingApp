import {gql} from '@apollo/client';

export const GET_LOCATIONS = gql`
  query {
    location(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_LOCATION_DETAILS = id => gql`
  query {
    location(id: "${id}") {
      description
      region
    }
  }
`;
