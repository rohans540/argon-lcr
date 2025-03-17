import express from "express";
import { getBoards, getBoard, createBoard, updateBoard, deleteBoard } from "../controllers/board.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Boards
 *   description: API for managing boards
 */

/**
 * @swagger
 * /api/boards:
 *   get:
 *     summary: Get all boards
 *     tags: [Boards]
 *     responses:
 *       200:
 *         description: A list of boards
 *       500:
 *         description: Server error
 */
router.get("/", getBoards);

/**
 * @swagger
 * /api/boards/{id}:
 *   get:
 *     summary: Get a single board by ID
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The board ID
 *     responses:
 *       200:
 *         description: Board details
 *       404:
 *         description: Board not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getBoard);
/**
 * @swagger
 * /api/boards:
 *   post:
 *     summary: Create a new board
 *     tags: [Boards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Board"
 *     responses:
 *       201:
 *         description: Board created successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.post("/", createBoard);

/**
 * @swagger
 * /api/boards/{id}:
 *   put:
 *     summary: Update a board by ID
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The board ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Board Name"
 *     responses:
 *       200:
 *         description: Board updated successfully
 *       404:
 *         description: Board not found
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.put("/:id", updateBoard);

/**
 * @swagger
 * /api/boards/{id}:
 *   delete:
 *     summary: Delete a board by ID
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The board ID
 *     responses:
 *       200:
 *         description: Board deleted successfully
 *       404:
 *         description: Board not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteBoard);

export default router;
