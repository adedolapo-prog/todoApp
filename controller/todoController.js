import todoService from "../service/todoService.js"

export default class todoController {
  static async getAllTodos(req, res) {
    let todo = await todoService.getAllTodos()
    res
      .status(200)
      .json({ status: 200, data: todo, message: "list of todo fetched" })
  }

  static async createTodo(req, res) {
    try {
      let newTodo = await todoService.createTodo(req.body.description)
      res
        .status(200)
        .json({ status: 200, data: newTodo, message: "new todo created" })
    } catch (error) {
      res.status(400).json({ status: 400, message: "error creating todo" })
    }
  }

  static async getTodo(req, res) {
    try {
      let foundTodo = await todoService.getTodo(req.params.id)
      res
        .status(200)
        .json({ status: 200, data: foundTodo, message: "todo fetched" })
    } catch (error) {
      res.status(400).json({ status: 400, message: "error fetching todo" })
    }
  }

  static async updateTodo(req, res) {
    try {
      let updateTodo = await todoService.updateTodo(
        req.params.id,
        req.body.description
      )

      res
        .status(200)
        .json({ status: 200, data: updateTodo, message: "todo updated" })
    } catch (error) {
      res.status(400).json({ status: 400, message: "error updating todo" })
    }
  }

  static async deleteTodo(req, res) {
    try {
      let deleteTodo = await todoService.deleteTodo(req.params.id)

      res
        .status(200)
        .json({ status: 200, data: deleteTodo, message: "todo deleted" })
    } catch (error) {
      res.status(400).json({ status: 400, message: "error deleting todo" })
    }
  }
}
