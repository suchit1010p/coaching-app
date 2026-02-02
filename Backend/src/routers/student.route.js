import { Router } from "express";
import {
    loginStudent,
    logoutStudent,
    getStudentProfile,
    getStudentBatch,
    getStudentSubjects,
    getSubjectUnits,
    getUnitMaterials,
    getStudentAttendanceHistory
} from "../controllers/student.controller.js";
import { verifyStudentJWT } from "../middlewares/auth.student.middleware.js";

const router = Router();

// Public routes (no authentication required)
router.route("/login").post(loginStudent);

// Protected routes (student must be logged in)
router.route("/logout").post(verifyStudentJWT, logoutStudent);
router.route("/profile").get(verifyStudentJWT, getStudentProfile);
router.route("/batch").get(verifyStudentJWT, getStudentBatch);
router.route("/subjects").get(verifyStudentJWT, getStudentSubjects);
router.route("/subjects").post(verifyStudentJWT, getSubjectUnits);
router.route("/units").post(verifyStudentJWT, getUnitMaterials);
router.route("/attendance").get(verifyStudentJWT, getStudentAttendanceHistory);

export default router;