import { v4 as uuidv4 } from "uuid"
import Todo from "../models/todo.js"

export default class todoService {
  static async getAllTodos() {
    // sort by name
    return Todo.find().sort({ description: 1 })
  }

  static async createTodo(description) {
    if (typeof description !== "undefined") {
      let newTodo = new Todo({
        uniqueId: uuidv4(),
        description,
        isCompleted: false,
      })

      newTodo.save()

      return newTodo
    } else {
      throw error
    }
  }

  static async getTodo(id) {
    let foundTodo = await Todo.findById(id)
    if (foundTodo) {
      return foundTodo
    } else {
      throw error
    }
  }

  static async updateTodo(id, description) {
    let updateTodo = await Todo.findByIdAndUpdate(
      id,
      { description },
      { omitUndefined: false, useFindAndModify: false },
      () => {
        console.log("done")
      }
    )
    if (updateTodo) {
      return updateTodo
    } else {
      throw error
    }
  }

  static async deleteTodo(id) {
    let deleteTodo = await Todo.findByIdAndDelete(id)
    if (deleteTodo) {
      return deleteTodo
    } else {
      throw error
    }
  }
}
