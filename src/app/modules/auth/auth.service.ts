import config from "../../config";
import userModel from "./auth.model";
import { TLogin, TRegister } from "./auth.type";
import bcrypt from "bcrypt";
import { createToken } from "./auth.utils";

export const createUserDB = async (payload: TRegister) => {
  const result = await userModel.create(payload);
  if (!result) {
    throw new Error("Something went wrong!");
  }
  const tokenPayload = {
    fullName: result.fullName,
    email: result.email,
  };
  const accessToken = createToken(tokenPayload, config.ACCESS_KEY as string);
  const refreshToken = createToken(tokenPayload, config.REFRESH_KEY as string);

  return {
    result,
    accessToken,
    refreshToken,
  };
};

export const loginDB = async (payload: TLogin) => {
  const getUser = await userModel.findOne({ email: payload.email });
  if (!getUser) {
    throw new Error();
  }
  const comparePassword = await bcrypt.compare(
    payload.password,
    getUser?.password
  );
  if (!comparePassword) {
    throw new Error("Please enter a correct password!");
  }

  const tokenPayload = {
    fullName: getUser.fullName,
    email: getUser.email,
  };
  const accessToken = createToken(tokenPayload, config.ACCESS_KEY as string);

  return accessToken;
};
