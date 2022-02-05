const { Schema, model } = require("mongoose");

const storeSchema = new Schema({
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
});

const Store = model("Store", storeSchema);

module.exports = Store;
