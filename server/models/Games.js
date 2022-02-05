const { Schema, model } = require("mongoose");

const Dm = {
  index: { type: String },
  name: { type: String },
};

const Players = {
  index: { type: String },
  name: { type: String },
};

const Stores = {
  index: { type: String },
  name: { type: String },
};

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dm: { Dm },
  players: [Players],
  stores: [Stores],
});

const Games = model("Games", gameSchema);

module.exports = Games;
