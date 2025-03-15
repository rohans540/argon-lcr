import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Create Task
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, status, boardId } = req.body;

    if (!title || !status || !boardId) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const task = await prisma.task.create({
      data: { 
        title, 
        description, 
        status, 
        boardId: Number(boardId)
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a Single Task by ID
export const getTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    res.json(task);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update Task
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id); // Convert ID to number
    const { title, description, status } = req.body;

    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title: title ?? existingTask.title,
        description: description ?? existingTask.description,
        status: status ?? existingTask.status,
      },
    });

    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Delete Task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id); // Convert ID to number

    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    await prisma.task.delete({
      where: { id },
    });

    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
