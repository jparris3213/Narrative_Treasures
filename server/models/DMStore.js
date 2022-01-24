const { Schema, model } = require("mongoose");

const dmStoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  playerList: [
    {
      type: String,
      required: false,
    },
  ],

  goldMin: {
    type: Number,
    required: false,
  },

  goldMax: {
    type: Number,
    required: false,
  },

  adventureGearFilter: {
    type: Boolean,
    required: false,
  },

  toolsFilter: {
    type: Boolean,
    required: false,
  },

  mountsFilter: {
    type: Boolean,
    required: false,
  },

  armorFilter: {
    type: Boolean,
    required: false,
  },

  weaponFilter: {
    type: Boolean,
    required: false,
  },

  inflationVariable: {
    type: Number,
    required: false,
  },
});

const DMStore = model("DMStore", dmStoreSchema);

module.exports = DMStore;
