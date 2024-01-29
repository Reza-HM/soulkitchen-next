import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface TokenData {
  [key: string]: any;
}

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

const generateToken = (data: TokenData): string => {
  const token = jwt.sign({ ...data }, process.env.privateKey || "", {
    expiresIn: "24h",
  });

  return token;
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};

const verifyToken = (token: string): TokenData | false => {
  try {
    const validationResult = jwt.verify(token, process.env.privateKey || "");
    return validationResult as TokenData;
  } catch (err) {
    console.log("Verify Token Error:", err);
    return false;
  }
};

export { hashPassword, generateToken, verifyPassword, verifyToken };
