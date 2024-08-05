import { request } from "express";
import mongoose, { Schema, Types, model } from "mongoose";

const placeSuggestionSchema = new Schema(
  {
    id:{type:String,
      required:true,
      unique:true
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    Pic: {
      type: String,
    },
    category: {
      type: String,
      enum: ["ancient", "religious", "beaches","museums","hotels"],
    },
  },
  {
    timestamps: true,
  }
);

const placeSuggestionModel =
  mongoose.models.placeSuggestion ||model("placeSuggestion", placeSuggestionSchema);
export default placeSuggestionModel ;
