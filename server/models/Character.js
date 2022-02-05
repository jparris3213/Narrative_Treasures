const { Schema, model } = require("mongoose");

const Items = {
  index: { type: String },
  name: { type: String },
  payedAmount: { type: Number },
};

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gold: {
    type: Number,
    required: true,
    trim: true,
  },
  items: [Items],
});

const Character = model("Character", characterSchema);

module.exports = Character;
