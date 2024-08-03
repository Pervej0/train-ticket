import express from "express";
import { createUser } from "./auth.controller";

const router = express.Router();

router.post("/register", createUser);

const authRoutes = router;

export default authRoutes;
