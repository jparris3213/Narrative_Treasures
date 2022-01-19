const { Schema, model } = require("mongoose");

const dmStoreSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },

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

  filter: {
    goldFilter: {
      type: Number,
      required: false,
    },
    weaponTypeFilter: {
      type: String,
      required: false,
    },
    rarityFilter: {
      type: String,
      required: false,
    },
  },
});
