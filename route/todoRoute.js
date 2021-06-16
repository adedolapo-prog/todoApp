import express from "express"
import todoController from "../controller/todoController.js"
const router = express.Router()

router.get("/", todoController.getAllTodos)

router.post("/", todoController.createTodo)

router.get("/:id", todoController.getTodo)

router.patch("/:id", todoController.updateTodo)

router.delete("/:id", todoController.deleteTodo)
export default router
