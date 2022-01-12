const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        role: String
        inventory: [String]!
        gold: Int
    }

    type Query{
    }

    type Mutation {
    }
`;

module.exports = typeDefs;
