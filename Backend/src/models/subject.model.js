import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        batch: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Batch",
            required: true
        }
    },
    { timestamps: true }
);

export const Subject = mongoose.model("Subject", subjectSchema);
