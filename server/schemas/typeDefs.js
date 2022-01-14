const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    role: String
    inventory: [String]
    gold: Int!
  }

  type Item {
    _id: ID!
    name: String!
    cost: Int!
    equipmentType: String!
    description: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    items: [Item]!
    item(itemId: ID!): Item
  }

  type Mutation {
    addProfile(
      name: String!
      email: String!
      password: string!
      role: String!
      gold: Int!
    ): Auth
    login(name: String!, email: String!, password: String!): Auth

    changeGold(profileId: ID!, goldSet: Int!): Profile
    addInventory(profileId: ID!, item: String!): Profile
    changeRole(profileId: ID!, role: String!): Profile

    addItem(
      name: String!
      cost: Int!
      equipmentType: String!
      description: String!
    ): Item
    removeItem(item: String): Item
  }
`;

module.exports = typeDefs;
