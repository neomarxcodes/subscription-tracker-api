import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

// Path: /api/v1/auth/sign-up -> (POST) user sign up
authRouter.post("/sign-up", signUp);

// Path: /api/v1/auth/sign-in -> (POST) user sign in
authRouter.post("/sign-in", signIn);

// Path: /api/v1/auth/sign-out -> (POST) user sign out
authRouter.post("/sign-out", signOut);

export default authRouter;
