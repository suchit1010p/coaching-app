import mongoose from "mongoose";

const attendanceEntrySchema = new mongoose.Schema(
    {
        attendance: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attendance",
            required: true
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        status: {
            type: String,
            enum: ["PRESENT", "ABSENT"],
            required: true
        }
    },
    { timestamps: true }
);

attendanceEntrySchema.index(
  { attendance: 1, student: 1 },
  { unique: true }
);

export const AttendanceEntry = mongoose.model("AttendanceEntry", attendanceEntrySchema);
