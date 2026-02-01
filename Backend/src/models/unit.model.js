import mongoose from "mongoose";

const unitSchema = new mongoose.Schema(
    {
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true
        },
        title: { type: String, required: true },
    },
    { timestamps: true }
);

unitSchema.index(
  { subject: 1, title: 1 },
  { unique: true }
);

export const Unit = mongoose.model("Unit", unitSchema);
