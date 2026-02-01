import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true, 
        unique: true,
    }
  },
  { timestamps: true }
);

export const Batch = mongoose.model("Batch", batchSchema);
