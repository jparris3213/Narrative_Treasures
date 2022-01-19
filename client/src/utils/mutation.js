import { gql } from "@apollo/client";

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
