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

  Mutation: {
    addProfile: async (parent, { name, email, password, role, gold }) => {
      const profile = await Profile.create(name, email, password, role, gold);
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { name, email, password }) => {
      const profile = await Profile.findOne({ name, email });

      if (!profile) {
        throw new AuthenticationError("No profile with that name or email!");
      }
      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password!");
      }
      const token = signToken(profile);
      return { token, profile };
    },

    changeGold: async (parent, { profileId, goldSet }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $set: { gold: goldSet } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
  },
};

module.exports = resolver;
