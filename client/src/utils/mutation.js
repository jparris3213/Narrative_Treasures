import { gql } from "@apollo/client";

//this logs a user in
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

//this adds a user to our database
export const ADD_PROFILE = gql`
  mutation addProfile(
    $name: String!
    $email: String!
    $password: String!
    $dungeonMaster: Boolean!
    $gold: Int!
  ) {
    addProfile(
      name: $name
      email: $email
      password: $password
      dungeonMaster: $dungeonMaster
      gold: $gold
    ) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

//mutation used for changing users gold count, must first do the math on the current gold count the user has adding/subtracting, get the answer and use that for the mutation
export const CHANGE_GOLD = gql`
  mutation changeGold($profileId: ID!, $goldSet: Int!) {
    changeGold(profileId: $profileId, goldSet: $goldSet) {
      name
      gold
    }
  }
`;

//mutation used to change the users role of DM to true or false
export const CHANGE_ROLE = gql`
  mutation changeRole($profileId: ID!, $setRole: Boolean!) {
    changeRole(profileId: $profileId, setRole: $setRole) {
      name
      dungeonMaster
    }
  }
`;

//mutation used for adding items to their inventory
export const ADD_INVENTORY = gql`
  mutation addInventory($profileId: ID!, $item: String!) {
    addInventory(profileId: $profileId, item: $item) {
      _id
      inventory
    }
  }
`;

//mutation used for users creating their own item
export const ADD_ITEM = gql`
  mutation addItem(
    $name: String!
    $cost: Int!
    $equipmentType: String!
    $description: String!
  ) {
    addItem(
      name: $name
      cost: $cost
      equipmentType: $equipmentType
      description: $description
    ) {
      _id
      name
      cost
      equipmentType
      description
    }
  }
`;

//mutation used for creating a filteredStore
export const ADD_FILTER = gql`
  mutation addFilter(
    $name: String!
    $playerList: [String]
    $goldMin: Int
    $goldMax: Int
    $adventureGearFilter: Boolean
    $toolsFilter: Boolean
    $mountsFilter: Boolean
    $armorFilter: Boolean
    $weaponFilter: Boolean
    $inflationVariable: Int
  ) {
    addFilter(
      name: $name
      playerList: $playerList
      goldMin: $goldMin
      goldMax: $goldMax
      adventureGearFilter: $adventureGearFilter
      toolsFilter: $toolsFilter
      mountsFilter: $mountsFilter
      armorFilter: $armorFilter
      weaponFilter: $weaponFilter
      inflationVariable: $inflationVariable
    ) {
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
