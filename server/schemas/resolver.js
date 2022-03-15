const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { Profile, Games, Stores, Character } = require("../models");
const { signToken } = require("../utils/auth");

const resolver = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId })
        .populate({
          path: "games",
          populate: "games",
        })
        .populate({
          path: "characters",
          populate: "character",
        });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id }).populate({
          path: "games",
          populate: "dm",
        });
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
    stores: async () => {
      return await Stores.find();
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
        //check for duplicate game names
        const user = await Profile.findById(dm).populate({
          path: "games",
          populate: "games",
        });
        const gameNames = user.games.map((game) => {
          return game.name;
        });
        if (gameNames.includes(name)) {
          throw new AuthenticationError(
            "You can't have more then one game with the same name."
          );
        }

        //create new game
        const game = await Games.create({
          name,
          password,
          dm,
        });

        //update profile of dm
        await Profile.findByIdAndUpdate(dm, {
          games: [...user.games, game._id],
        });
        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //TODO:Change profileId over to context
    addCharacter: async (
      parent,
      { name, gold, gameId, profileId },
      context
    ) => {
      //check for duplicate names in profile
      const user = await Profile.findById(profileId).populate({
        path: "characters",
        populate: "character",
      });
      const characterNamesProfile = user.characters.map((character) => {
        return character.name;
      });
      if (characterNamesProfile.includes(name)) {
        throw new AuthenticationError(
          "You can't have more then one character with the same name in a game."
        );
      }
      //check for no duplicate names in a game
      const game = await Games.findById(gameId).populate({
        path: "characters",
        populate: "character",
      });
      const characterNamesGame = game.characters.map((character) => {
        return character.name;
      });
      if (characterNamesGame.includes(name)) {
        throw new AuthenticationError(
          "You can't have more then one character with the same name in your profile."
        );
      }

      //creates new character
      const character = await Character.create({
        name,
        gold,
      });

      //update game
      await Games.findByIdAndUpdate(gameId, {
        players: [...game.players, character._id],
        characters: [...game.characters, character._id],
      });

      //update profile of player
      await Profile.findByIdAndUpdate(profileId, {
        characters: [...user.characters, character._id],
        games: [...user.games, game._id],
      });
      return character;
    },

    // Store Mutations
    addStore: async (parent, { name, sort, display, gameId }) => {
      //check for duplicate names in game
      const game = await Games.findById(gameId).populate({
        path: "stores",
        populate: "stores",
      });
      const storeNames = game.stores.map((store) => {
        return store.name;
      });
      if (storeNames.includes(name)) {
        throw new AuthenticationError(
          "You can't have more then one store with the same name."
        );
      }

      //creates store
      const store = await Stores.create({
        name,
        sort,
        display,
      });

      //update game
      await Games.findByIdAndUpdate(gameId, {
        stores: [...game.stores, store._id],
      });
      return store;
    },
  },
};

module.exports = resolver;
