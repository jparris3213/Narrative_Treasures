const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
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
  },

  // Mutation: {
  //   addProfile: async (
  //     parent,
  //     { name, email, password, dungeonMaster, gold }
  //   ) => {
  //     const profile = await Profile.create({
  //       name,
  //       email,
  //       password,
  //       dungeonMaster,
  //       gold,
  //     });
  //     const token = signToken(profile);

  //     return { token, profile };
  //   },
  //   login: async (parent, { email, password }) => {
  //     const profile = await Profile.findOne({ email });

  //     if (!profile) {
  //       throw new AuthenticationError("No profile with that name or email!");
  //     }
  //     const correctPw = await profile.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError("Incorrect Password!");
  //     }
  //     const token = signToken(profile);
  //     return { token, profile };
  //   },

  //   changeGold: async (parent, { profileId, goldSet }, context) => {
  //     if (context.user) {
  //       return Profile.findOneAndUpdate(
  //         { _id: profileId },
  //         { $set: { gold: goldSet } },
  //         {
  //           new: true,
  //           runValidators: true,
  //         }
  //       );
  //     }
  //     throw new AuthenticationError(
  //       "You have to be logged in to make changes!"
  //     );
  //   },

  //   addInventory: async (parent, { profileId, item }, context) => {
  //     if (context.user) {
  //       return Profile.findOneAndUpdate(
  //         { _id: profileId },
  //         { $addToSet: { inventory: item } },
  //         {
  //           new: true,
  //           runValidators: true,
  //         }
  //       );
  //     }
  //     throw new AuthenticationError(
  //       "You have to be logged in to make changes!"
  //     );
  //   },

  //   removeProfile: async (parent, args, context) => {
  //     if (context.user) {
  //       return Profile.findOneAndDelete({ _id: context.user._id });
  //     }
  //     throw new AuthenticationError("You need to be logged in!");
  //   },

  //   removeItem: async (parent, { item }, context) => {
  //     if (context.user) {
  //       return Profile.findOneAndUpdate(
  //         { _id: context.user.id },
  //         { $pull: { inventory: item } },
  //         { new: true }
  //       );
  //     }
  //     throw new AuthenticationError("You must be logged in!");
  //   },

  //   addItem: async (
  //     parent,
  //     { name, cost, equipmentType, description },
  //     context
  //   ) => {
  //     if (context.user) {
  //       return Item.create({ name, cost, equipmentType, description });
  //     }
  //     throw new AuthenticationError("You must be logged in!");
  //   },
  // },
};

module.exports = resolver;
