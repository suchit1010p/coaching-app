import mongoose from "mongoose";

const whatsappLogSchema = new mongoose.Schema(
    {
        attendance: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attendance"
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },
        parentMobile: { type: String },
        status: {
            type: String,
            enum: ["SENT", "FAILED"]
        },
        response: { type: Object }
    },
  { timestamps: true }
);

export const WhatsAppLog = mongoose.model("WhatsAppLog", whatsappLogSchema);
