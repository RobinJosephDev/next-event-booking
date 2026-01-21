import { createUser, findUserByEmail } from "../models/UserModel.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existing = await findUserByEmail(email);
    if (existing)
      return res.status(400).json({ message: "Email already in use" });

    const hashed = await hashPassword(password);
    const user = await createUser(name, email, hashed);
    const token = generateToken(user);
    res.json({ user, token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    console.log("LOGIN HIT");

    const { email, password } = req.body;
    console.log("Request Body:", req.body);  // Log incoming data

    console.log("Finding user...");
    const user = await findUserByEmail(email);
    console.log("User result:", user);

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Comparing password...");
    const match = await comparePassword(password, user.password_hash);
    console.log("Password match:", match);

    if (!match) {
      console.log("Password mismatch");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Generating token...");
    const token = generateToken(user);
    console.log("Token generated:", token);

    res.json({ user, token });
  } catch (err) {
    console.log("ERROR IN LOGIN:", err);
    next(err);
  }
};



