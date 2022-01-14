const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolver = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    items: async () => {
      return Item.find();
    },
    item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  },

  Mutation: {},
};

module.exports = resolver;
