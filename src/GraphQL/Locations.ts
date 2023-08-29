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

export const GET_LOCATION_DETAILS = (id: string) => gql`
  query LocationDetails {
    location(id: "${id}") {
      description
      region
    }
  }
`;
