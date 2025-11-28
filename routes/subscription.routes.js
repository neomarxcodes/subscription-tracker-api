import { Router } from "express";

const subscriptionRouter = Router();

// GET /subscriptions -> get all subscriptions
subscriptionRouter.get("/", (req, res) => res.send({ title: "GET all subscriptions" }));

// GET /subscriptions/:id -> get subscription details by ID
subscriptionRouter.get("/:id", (req, res) => res.send({ title: "GET subscription details by ID" }));

// POST /subscriptions -> create a new subscription
subscriptionRouter.post("/", (req, res) => res.send({ title: "CREATE a new subscription" }));

// PUT /subscriptions/:id -> update subscription by ID
subscriptionRouter.put("/:id", (req, res) => res.send({ title: "UPDATE subscription by ID" }));

// DELETE /subscriptions/:id -> delete subscription by ID
subscriptionRouter.delete("/:id", (req, res) => res.send({ title: "DELETE subscription by ID" }));

// GET /subscriptions/user/:userId -> get subscriptions by user ID
subscriptionRouter.get("/user/:userId", (req, res) => res.send({ title: "GET subscriptions by user ID" }));

// PUT /subscriptions/:id/cancel -> cancel subscription by ID
subscriptionRouter.put("/:id/cancel", (req, res) => res.send({ title: "CANCEL subscription by ID" }));

// GET /subscriptions/upcoming-renewals -> GET upcoming renewals
subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({ title: "Get upcoming renewals" }));

export default subscriptionRouter;
