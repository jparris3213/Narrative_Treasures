const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  dm: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },

  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  stores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stores",
    },
  ],
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
});

const Games = model("Games", gameSchema);

module.exports = Games;
