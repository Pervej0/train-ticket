import { NextFunction, Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserDB, loginDB } from "./auth.service";
import asyncCatch from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";

export const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await createUserDB(data);

    // pass refreshToken inside cookie
    res.cookie("refreshToken", result.refreshToken);

    res.status(StatusCodes.CREATED).json({
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User registered successfully!",
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
};

export const login: RequestHandler = asyncCatch(async (req, res) => {
  const result = await loginDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User logged in successfully!",
    data: result,
  });
});
