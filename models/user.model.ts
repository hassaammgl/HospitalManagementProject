import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["admin", "user", "patient"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

// Register the model in mongoose's models object
// mongoose.models = {};
export const User = mongoose.model("User", userSchema);
