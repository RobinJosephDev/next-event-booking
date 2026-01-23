import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";     // Postgres connection
import { errorHandler } from "./middleware/errorMiddleware.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import { routeTracker } from "./routeTracker.js";

dotenv.config();

const app = express();
const apiRouter = express.Router();

// Test DB connection
pool
  .connect()
  .then(() => console.log("Postgres connected"))
  .catch((err) => console.error("Postgres connection error", err));

// --- LOGGER MUST BE FIRST AFTER APP ---
app.use((req, res, next) => {
  console.log("📌 Incoming:", req.method, req.url);
  next();
});

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-vercel-domain.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// API ROUTES
apiRouter.use("/auth", authRoutes);
apiRouter.use("/users", userRoutes);
apiRouter.use("/events", eventRoutes);
apiRouter.use("/bookings", bookingRoutes);

app.use("/api", apiRouter);

// ERROR HANDLER LAST
app.use(errorHandler);

// --- ROUTE TRACKER ---
routeTracker.add("/api/auth/register", ["POST"]);
routeTracker.add("/api/auth/login", ["POST"]);
routeTracker.add("/api/users", ["GET", "POST"]);
routeTracker.add("/api/users/:id", ["GET", "PUT", "DELETE"]);
routeTracker.add("/api/events", ["GET", "POST"]);
routeTracker.add("/api/events/:id", ["GET", "PUT", "DELETE"]);
routeTracker.add("/api/bookings", ["GET", "POST"]);
routeTracker.add("/api/bookings/:id", ["GET", "PUT", "DELETE"]);

console.log("ROUTES:", routeTracker.routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
