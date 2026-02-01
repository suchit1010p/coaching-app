import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const studentSchema = new mongoose.Schema(
    {
        rollNumber: {
            type: Number,
            unique: true,
            trim: true
        },
        name: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        parentName: {
            type: String,
            required: true
        },
        parentMobile: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        batch: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Batch",
            required: true
        }
    },
    { timestamps: true }
);

studentSchema.pre("save", async function () {
    if (!this.isModified("password")) return

    this.password = await bcrypt.hash(this.password, 10);
})

studentSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            rollNumber: this.rollNumber,
            mobile: this.mobile,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

studentSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
        rollNumber: this.rollNumber,
        mobile: this.mobile,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const Student = mongoose.model("Student", studentSchema);
