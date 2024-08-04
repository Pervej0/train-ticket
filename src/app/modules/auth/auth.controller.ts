import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserDB, loginDB } from "./auth.service";
import asyncCatch from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";

export const createUser: RequestHandler = asyncCatch(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await createUserDB(data);

    // pass refreshToken inside cookie
    res.cookie("refreshToken", result.refreshToken);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User registered successfully!",
      data: result,
    });
  }
);

export const login: RequestHandler = asyncCatch(async (req, res) => {
  const result = await loginDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User logged in successfully!",
    data: result,
  });
});
