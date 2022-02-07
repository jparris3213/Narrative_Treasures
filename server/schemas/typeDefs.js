const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    characters: [Character]
    games: [Games]
  }

  type Store {
    _id: ID!
    name: String!
    sort: String!
  }

  type Character {
    _id: ID!
    name: String!
    gold: Float!
    items: [String]
  }

  type Games {
    _id: ID!
    name: String!
    dm: Profile!
    players: [Profile]
    stores: [Store]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
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

    addFilterToUser(profileId: ID!, filterId: ID!): Profile
  }
`;

module.exports = typeDefs;
