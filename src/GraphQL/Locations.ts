import {gql} from '@apollo/client';

export const GET_LOCATIONS = gql`
  query Locations {
    location(limit: 100) {
      id
      name
      image
    }
  }
`;

export const GET_LOCATION_DETAILS = gql`
  query LocationDetails($id: String!) {
    getLocation(id: $id) {
      description
      region
    }
  }
`;

export const GET_LOCATION_IMAGE_BY_NAME = gql`
  query LocationImageByName($name: String!) {
    location(name: $name) {
      image
    }
  }
`;
