const { AuthenticationError } = require("apollo-server-express");
const {} = require("../models");
const { signToken } = require("../utils/auth");

const resolver = {
  Query: {},

  Mutation: {},
};

module.exports = resolver;
