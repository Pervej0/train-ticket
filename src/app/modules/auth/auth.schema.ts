import mongoose from "mongoose";
import { TRegister } from "./auth.type";
const { Schema } = mongoose;

const userRegisterSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const userModel = mongoose.model<TRegister>("user", userRegisterSchema);

export default userModel;
