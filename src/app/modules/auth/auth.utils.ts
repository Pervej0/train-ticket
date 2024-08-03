import { Schema } from "mongoose";
import bcrypt from "bcrypt";

export const hashedPassword = (schema: Schema) => {
  schema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password as string, 12);
    }
    next();
  });
};
