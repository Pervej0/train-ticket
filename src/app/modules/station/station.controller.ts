import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";
import { RequestHandler } from "express";
import asyncCatch from "../../utils/asyncCatch";
import { createTrainStationDB } from "./station.service";

export const createStation: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createTrainStationDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Train Station created successfully!",
    data: result,
  });
});
