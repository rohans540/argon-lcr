import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "./utils/logger";
import setupSwagger from "./swagger";
import boardRoutes from "./routes/board.routes";
import taskRoutes from "./routes/task.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
