const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    dungeonMaster: Boolean!
    inventory: [String]
    gold: Float!
    savedFilters: [String]
  }

  type Item {
    _id: ID!
    name: String!
    cost: Int!
    equipmentType: String!
    description: String
  }

  type DMStore {
    _id: ID!
    name: String!
    playerList: [String]
    goldMin: Int
    goldMax: Int
    adventureGearFilter: Boolean
    toolsFilter: Boolean
    mountsFilter: Boolean
    armorFilter: Boolean
    weaponFilter: Boolean
    inflationVariable: Int
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    items: [Item]!
    item(itemId: ID!): Item
    storeFilter(storeId: ID!): DMStore
  }

  type Mutation {
    addProfile(
      name: String!
      email: String!
      password: String!
      dungeonMaster: Boolean!
      gold: Float!
    ): Auth

    login(email: String!, password: String!): Auth

    changeGold(profileId: ID!, goldSet: Float!): Profile
    addInventory(profileId: ID!, item: String!): Profile

    changeRole(profileId: ID!, setRole: Boolean!): Profile

    removeItem(item: String!): Profile
    removeProfile: Profile

    addItem(
      name: String!
      cost: Int!
      equipmentType: String!
      description: String!
    ): Item

    addFilter(
      name: String!
      playerList: [String]
      goldMin: Int
      goldMax: Int
      adventureGearFilter: Boolean
      toolsFilter: Boolean
      mountsFilter: Boolean
      armorFilter: Boolean
      weaponFilter: Boolean
      inflationVariable: Int
    ): DMStore

    addFilterToUser(profileId: ID!, filterId: ID!): Profile
  }
`;

module.exports = typeDefs;
