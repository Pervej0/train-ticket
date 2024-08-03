/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = StatusCodes.BAD_REQUEST;
  let message = err.message || "Something Went Wrong!";
  const error = err;

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = StatusCodes.FORBIDDEN;
    message = err.message;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    statusCode,
    success: false,
    message: message,
    error,
  });

  next();
};

export default globalErrorHandler;
