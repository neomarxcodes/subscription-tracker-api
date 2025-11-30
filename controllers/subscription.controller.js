import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const {
      name,
      price,
      currency,
      frequency,
      category,
      paymentMethod,
      startDate,
    } = req.body;
    const subscription = await Subscription.create({
      name,
      price,
      currency,
      frequency,
      category,
      paymentMethod,
      startDate,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // Check if the user is the same as the one in the token
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error(
        "You are not the owner of this account; cannot get user subscriptions"
      );
      error.statusCode = 403;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.user._id });

    if (subscriptions.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No subscriptions found for this user",
        data: [],
      });
    }

    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};

export const deleteUserSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!subscription) {
      const error = new Error(
        "Subscription not found or you don't have permission to delete it"
      );
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ success: true, message: "Subscription successfully deleted" });
  } catch (error) {
    next(error);
  }
};
