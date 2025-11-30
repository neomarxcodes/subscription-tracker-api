import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  deleteUserSubscription,
  getSubscriptionDetails,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// ✅ GET /subscriptions/user/:id -> get subscriptions by user ID
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

// GET /subscriptions/upcoming-renewals -> GET upcoming renewals by user ID
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "Get upcoming renewals" })
);

// ✅ GET /subscriptions/:id -> get subscription details by ID
subscriptionRouter.get("/:id", authorize, getSubscriptionDetails);

// ✅ POST /subscriptions -> create a new subscription
subscriptionRouter.post("/", authorize, createSubscription);

// PUT /subscriptions/:id -> update subscription by ID
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription by ID" })
);

// ✅ DELETE /subscriptions/:id -> delete subscription by ID
subscriptionRouter.delete("/:id", authorize, deleteUserSubscription);

// PUT /subscriptions/:id/cancel -> cancel subscription by ID
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription by ID" })
);

export default subscriptionRouter;
