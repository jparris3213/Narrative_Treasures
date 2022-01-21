const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { Item } = require("../models");
const { DMStore } = require("../models");
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
    storeFilter: async (parent, { storeId }) => {
      return DMStore.findOne({ _id: storeId });
    },
  },

  Mutation: {
    addProfile: async (
      parent,
      { name, email, password, dungeonMaster, gold }
    ) => {
      const profile = await Profile.create({
        name,
        email,
        password,
        dungeonMaster,
        gold,
      });
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
      throw new AuthenticationError(
        "You have to be logged in to make changes!"
      );
    },

    addInventory: async (parent, { profileId, item }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $addToSet: { inventory: item } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError(
        "You have to be logged in to make changes!"
      );
    },

    changeRole: async (parent, { profileId, setRole }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $set: { dungeonMaster: setRole } },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeItem: async (parent, { item }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user.id },
          { $pull: { inventory: item } },
          { new: true }
        );
      }
      throw new AuthenticationError("You must be logged in!");
    },

    addItem: async (
      parent,
      { name, cost, equipmentType, description },
      context
    ) => {
      if (context.user) {
        return Item.create({ name, cost, equipmentType, description });
      }
      throw new AuthenticationError("You must be logged in!");
    },

    addFilter: async (
      paranet,
      {
        name,
        playerList,
        filter,
        goldFilter,
        weaponTypeFilter,
        armorFilter,
        weaponFilter,
        inflationVariable,
      }
    ) => {
      return DMStore.create({
        name,
        playerList,
        goldFilter,
        weaponTypeFilter,
        armorFilter,
        weaponFilter,
        inflationVariable,
      });
    },
  },
};

module.exports = resolver;
