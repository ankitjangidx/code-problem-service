import mongoose from "mongoose";
import { ATLAS_MONGO_URL } from "./server.config.js";

export const connectToDb = async () => {
  try {
    await mongoose.connect(ATLAS_MONGO_URL);
    console.log(`successful connect to db`);
  } catch (error) {
    console.log(`enable to connect to db error:${error}`);
  }
};
