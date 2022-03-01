const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { Profile, Games, Stores, Character } = require("../models");
const { findById } = require("../models/Games");
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
      const games = await Games.find().populate({
        path: "dm",
        populate: "profiles",
      });
      return games;
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
    //TODO:change dm back over to context
    addGame: async (parent, { name, password, dm }, context) => {
      if (true) {
        const game = await Games.create({
          name,
          password,
          dm,
        });
        //update profile of dm
        const user = await Profile.findById(dm);
        await Profile.findByIdAndUpdate(dm, {
          games: [...user.games, game._id],
        });
        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addCharacter: async (
      parent,
      { name, gold, gameId, profileId },
      context
    ) => {
      const character = await Character.create({
        name,
        gold,
      });
      //update game
      const game = await Games.findById(gameId);
      await Games.findByIdAndUpdate(gameId, {
        players: [...game.players, character._id],
      });
      //update profile of player
      const user = await Profile.findById(profileId);
      await Profile.findByIdAndUpdate(profileId, {
        characters: [...user.characters, character._id],
        games: [...user.games, game._id],
      });
      return character;
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
