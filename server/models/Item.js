const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  equipmentType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
