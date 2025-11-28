import { Router } from "express";

const authRouter = Router();

// POST /auth/sign-up -> user sign up
authRouter.post("/sign-up", (req, res) => res.send({ title: "Sign Up" }));

// POST /auth/sign-in -> user sign in
authRouter.post("/sign-in", (req, res) => res.send({ title: "Sign In" }));

// POST /auth/sign-out -> user sign out
authRouter.post("/sign-out", (req, res) => res.send({ title: "Sign Out" }));

export default authRouter;
