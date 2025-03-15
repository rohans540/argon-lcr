import express from "express";
import { createTask, getTask, updateTask, deleteTask } from "../controllers/task.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API for managing tasks
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - status
 *               - boardId
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Design Homepage"
 *               description:
 *                 type: string
 *                 example: "Designing the homepage"
 *               status:
 *                  type: string
 *                  example: "Todo"
 *               boardId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.post("/", createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a single task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task details
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Update homepage design"
 *               description:
 *                  type: string
 *                  example: "Update homepage descripion"
 *               status:
 *                 type: string
 *                 example: "In Progress"
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.put("/:id", updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteTask);

export default router;
