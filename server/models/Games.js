const { Schema, model } = require("mongoose");
const Stores = require("./Store");

const Dm = {
  index: { type: String },
  name: { type: String },
};

const Players = {
  index: { type: String },
  name: { type: String },
};

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
  dm: { Dm },
  players: [Players],
  stores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stores",
    },
  ],
});

const Games = model("Games", gameSchema);

module.exports = Games;
