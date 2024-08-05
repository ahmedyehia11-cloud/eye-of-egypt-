import mongoose, { Schema,model } from "mongoose";



  

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female"],
    },
    phone: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    coverPic: {
      type: [String],
    },
    address: {
      type: String,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "offline",
      enum: ["offline", "online", "blocked"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin","tour guide"],
    },
    socialLinks: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || model("User", userSchema);
export default userModel