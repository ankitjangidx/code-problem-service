import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title cannot be empty"],
    },
    description: {
      type: String,
      required: [true, "description cannot be empty"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "difficulty cannot be empty"],
      default: "easy",
    },
    testCases: [
      {
        input: {
          type: String,
          required: [true, "input cannot be empty"],
        },
        output: {
          type: String,
          required: [true, "output cannot be empty"],
        },
      },
    ],
    editorial: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Problem = mongoose.model("problem", problemSchema);
