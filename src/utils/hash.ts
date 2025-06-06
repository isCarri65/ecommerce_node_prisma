import bcrypt from "bcrypt";
import { envs } from "../config/env";

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, envs.bcrypt.saltRounds);
};

export const comparePasswords = async (
  plain: string,
  hashed: string
): Promise<boolean> => {
  return bcrypt.compare(plain, hashed);
};
