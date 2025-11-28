import { Router } from "express";

const userRouter = Router();

// GET/users -> get all users
userRouter.get("/", (req, res) => res.send({ title: "Get all users" }));

// GET /users/:id -> get user by ID
userRouter.get("/:id", (req, res) => res.send({ title: "GET user by ID" }));

// POST /users -> create a new user
userRouter.post("/", (req, res) => res.send({ title: "CREATE a new user" }));

// PUT /users/:id -> update user by ID
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user by ID" }));

// DELETE /users/:id -> delete user by ID
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user by ID" }));

export default userRouter;
