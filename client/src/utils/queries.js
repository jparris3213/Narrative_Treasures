import { gql } from "@apollo/client";

//gets all users in our database
export const QUERY_PROFILES = gql`
  query profiles {
    profiles {
      _id
      name
      email
      dungeonMaster
      inventory
      gold
    }
  }
`;

//gets a single user from our database
export const QUERY_GET_USER = gql`
  query getUser($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      dungeonMaster
      inventory
      gold
      savedFilters
    }
  }
`;

//gets the logged in user
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      dungeonMaster
      inventory
      gold
      savedFilters
    }
  }
`;

//gets all the items in our database
export const QUERY_GET_ITEMS = gql`
  query getItems {
    _id
    name
    equipmentType
    cost
    description
  }
`;

//gets the specified storeFilter
export const QUERY_GET_FILTER = gql`
  query getFilter($storeId: ID!) {
    storeFilter(storeId: $storeId) {
      _id
      name
      playerList
      goldMin
      goldMax
      adventureGearFilter
      toolsFilter
      mountsFilter
      armorFilter
      weaponFilter
      inflationVariable
    }
  }
`;
