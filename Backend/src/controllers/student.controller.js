import { asyncHandler } from "../utils/asyncHandler.js";
import { Student } from "../models/student.model.js";
import { StudentSubject } from "../models/studentSubject.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Batch } from "../models/batch.model.js";
import { Subject } from "../models/subject.model.js";
import { Unit } from "../models/unit.model.js";
import { StudentUnitMaterial } from "../models/studentUnitMaterial.model.js";

// here we write all the controller which student can perform tasks. Mostly there are get requests.

// student login

// student logout

// get student profile

// get batche of student

// get subjects of batch

// get units of subject

// get materials of unit

// get attendance History of student