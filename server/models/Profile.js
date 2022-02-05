const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const Game = {
  index: { type: String },
  name: { type: String },
  character: { type: String },
};

const Character = {
  index: { type: String },
  name: { type: String },
  gold: { type: Number },
};

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must be an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  characters: [Character],
  games: [Game],
});

// set up pre-save middleware to create password
profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model("Profile", profileSchema);

module.exports = Profile;
