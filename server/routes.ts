import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    // In a real implementation, this would serve the actual PDF file
    // For now, we'll just send the PDF path or create a simple response
    const resumePath = path.join(process.cwd(), "attached_assets", "A_Adarsh_Resume.pdf");
    
    res.download(resumePath, "A_Adarsh_Resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading resume:", err);
        res.status(404).json({ message: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
