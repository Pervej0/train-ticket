import { NextFunction, Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserDB } from "./auth.service";

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
