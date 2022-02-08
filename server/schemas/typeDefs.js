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

  type Stores {
    _id: ID!
    name: String!
    sort: String!
    display: Boolean!
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
    pasword: String!
    dm: Profile
    players: [Profile]
    stores: [Stores]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    games: [Games]!
    stores: [Stores]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile: Profile

    addGame(name: String!, password: String!): Games

    addStore(name: String!, sort: String!, display: Boolean!): Stores
  }
`;

module.exports = typeDefs;
