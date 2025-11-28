import { config } from "dotenv";

// Load .env before using it in the application
const nodeEnv = process.env.NODE_ENV || "development";

// Load environment variables from .env files based on the current NODE_ENV
config({ path: `.env.${nodeEnv}.local` });

export const { PORT, NODE_ENV, DB_URI } = process.env;
