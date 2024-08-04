import express from "express";
import { createStation } from "./station.controller";
const router = express.Router();

router.post("/create", createStation);
