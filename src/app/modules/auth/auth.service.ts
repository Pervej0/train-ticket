import userModel from "./auth.model";
import { TRegister } from "./auth.type";

export const createUserDB = async (payload: TRegister) => {
  const result = await userModel.create(payload);
  return result;
};
