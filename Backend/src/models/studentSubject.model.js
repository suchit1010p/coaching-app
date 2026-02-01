import mongoose from "mongoose";

const studentSubjectSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true
        }
    },
    { timestamps: true }
);

// Prevent duplicate subject enrollment
studentSubjectSchema.index(
  { student: 1, subject: 1 },
  { unique: true }
);

export const StudentSubject = mongoose.model("StudentSubject", studentSubjectSchema);
