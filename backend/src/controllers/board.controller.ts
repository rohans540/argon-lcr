import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Get All Boards
export const getBoards = async (req: Request, res: Response) => {
  try {
    const boards = await prisma.board.findMany({ include: { tasks: true } });
    res.json(boards);
  } catch (error) {
    console.error("Error fetching boards:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Get a Single Board
export const getBoard = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const board = await prisma.board.findUnique({
      where: { id },
      include: { tasks: true },
    });

    if (!board) {
      res.status(404).json({ error: "Board not found" });
      return;
    }

    res.json(board);
  } catch (error) {
    console.error("Error fetching board:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ Create Board
export const createBoard = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400).json({ error: "Title is required" });
      return;
    }

    const board = await prisma.board.create({ data: { title } });
    res.status(201).json(board);
  } catch (error) {
    console.error("Error creating board:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Update Board
export const updateBoard = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title } = req.body;

    const existingBoard = await prisma.board.findUnique({
      where: { id },
    });

    if (!existingBoard) {
      res.status(404).json({ error: "Board not found" });
      return;
    }

    const updatedBoard = await prisma.board.update({
      where: { id },
      data: { title: title ?? existingBoard.title },
    });

    res.json(updatedBoard);
  } catch (error) {
    console.error("Error updating board:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Delete Board
export const deleteBoard = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const existingBoard = await prisma.board.findUnique({
      where: { id },
    });

    if (!existingBoard) {
      res.status(404).json({ error: "Board not found" });
      return;
    }

    await prisma.board.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting board:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
