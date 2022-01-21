const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    dungeonMaster: Boolean!
    inventory: [String]
    gold: Int!
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
    goldFilter: Int
    weaponTypeFilter: [String]
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
      gold: Int!
    ): Auth

    login(name: String!, email: String!, password: String!): Auth

    changeGold(profileId: ID!, goldSet: Int!): Profile
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
      goldFilter: Int
      weaponTypeFilter: [String]
      armorFilter: Boolean
      weaponFilter: Boolean
      inflationVariable: Int
    ): DMStore

    addFilterToUser(profileId: ID!, filterId: ID!): Profile
  }
`;

module.exports = typeDefs;
