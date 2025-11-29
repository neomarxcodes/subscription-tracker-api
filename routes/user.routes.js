import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// GET/users -> get all users
userRouter.get("/", getUsers);

// GET /users/:id -> get user by ID
userRouter.get("/:id", authorize, getUser);

// POST /users -> create a new user
userRouter.post("/", (req, res) => res.send({ title: "CREATE a new user" }));

// PUT /users/:id -> update user by ID
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user by ID" }));

// DELETE /users/:id -> delete user by ID
userRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE user by ID" })
);

export default userRouter;
