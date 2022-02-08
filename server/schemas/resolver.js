const { AuthenticationError } = require("apollo-server-express");
const { Profile, Games, Stores } = require("../models");
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
    games: async () => {
      return Games.find();
    },
  },

  Mutation: {
    // User Mutation
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({
        name,
        email,
        password,
      });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

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

    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Game Mutations
    addGame: async (parent, { name, password }, context) => {
      if (context.user) {
        const game = await Games.create({
          name,
          password,
          dm: context.user._id,
        });
      }
    },

    // Store Mutations
    addStore: async (parent, { name, sort, display }) => {
      const store = await Stores.create({
        name,
        sort,
        display,
      });
      return store;
    },
  },
};

module.exports = resolver;
