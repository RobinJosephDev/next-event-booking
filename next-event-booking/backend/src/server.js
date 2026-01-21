import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import { routeTracker } from "./routeTracker.js";

dotenv.config();

const app = express();
const apiRouter = express.Router();

// ✅ CORS must be BEFORE routes
app.use(
  cors({
    origin: ["http://localhost:3000"], // add your frontend URL here
    credentials: true,
  })
);

app.use(express.json());

apiRouter.use("/auth", authRoutes);
apiRouter.use("/users", userRoutes);
apiRouter.use("/events", eventRoutes);
apiRouter.use("/bookings", bookingRoutes);

app.use("/api", apiRouter);
app.use(errorHandler);

// --- MANUALLY REGISTER ROUTES ---
routeTracker.add("/api/auth/register", ["POST"]);
routeTracker.add("/api/auth/login", ["POST"]);
routeTracker.add("/api/users", ["GET", "POST"]);
routeTracker.add("/api/users/:id", ["GET", "PUT", "DELETE"]);
routeTracker.add("/api/events", ["GET", "POST"]);
routeTracker.add("/api/events/:id", ["GET", "PUT", "DELETE"]);
routeTracker.add("/api/bookings", ["GET", "POST"]);
routeTracker.add("/api/bookings/:id", ["GET", "PUT", "DELETE"]);

// --- PRINT ROUTES ---
console.log("ROUTES:", routeTracker.routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
