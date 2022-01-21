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
  goldFilter: {
    type: Number,
    required: false,
  },
  weaponTypeFilter: [
    {
      type: String,
      required: false,
    },
  ],
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
