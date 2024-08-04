import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TJsonData } from "../types/jsonData";

const sendResponse = <T>(res: Response, jsonData: TJsonData<T>) => {
  res.status(StatusCodes.CREATED).json({
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "User registered successfully!",
    data: jsonData?.data,
  });
};

export default sendResponse;
