import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"], // required field accepts array that defines if password is empty we can send custom message
    },
  },
  { timestamps: true } // it gives timestamp of created at and updated
);

export const User = mongoose.model("User", userSchema); // it stores as users in the mongoose database as it is the standard pratice of Mongodb to save User as users
