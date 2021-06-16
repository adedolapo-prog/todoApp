import express from "express"
import router from "../route/todoRoute.js"
export default app => {
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use("/todo", router)
}
