const { Schema, model } = require("mongoose");

const storesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  sort: {
    type: String,
    required: true,
    trim: true,
  },
  display: {
    type: Boolean,
    required: true,
  },
});

const Stores = model("Stores", storesSchema);

module.exports = Stores;
