const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    city: { type: String },
    phone: { type: String },
    website: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema, "Users");
