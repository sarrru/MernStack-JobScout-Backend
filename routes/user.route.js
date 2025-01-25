import express from "express";
import { register, login, updateProfile } from "../controllers/user.controller";

const router = express.Router();

// Define routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(updateProfile);

export default router;
