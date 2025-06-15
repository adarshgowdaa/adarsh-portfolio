import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import { createServer } from "http";
import { setupVite, serveStatic } from "./vite.js";
import { registerRoutes } from "./routes.js";

// Load environment variables
dotenv.config();

const app = express();
const server = createServer(app);

const isDev = process.env.NODE_ENV === "development";

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// API Routes
registerRoutes(app);

// Static frontend serving or Vite dev middleware
if (isDev) {
  setupVite(app, server).catch((err) => {
    console.error("Failed to start Vite in dev mode:", err);
    process.exit(1);
  });
} else {
  serveStatic(app); // Serves client/dist
}

// 404 fallback for unknown routes (non-frontend, non-API)
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Server error:", err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT} (${isDev ? "dev" : "prod"} mode)`);
});
