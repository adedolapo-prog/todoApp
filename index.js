import express from "express"
import middleware from "./middleware/app.js"
import mongoose from "mongoose"
const app = express()
const PORT = process.env.PORT || 5000
import dotenv from "dotenv"
dotenv.config()

//connect to db
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Awesome, we are connected to our db`)
  })
  .catch(err => {
    console.log("Ooops, failed to connect to the db", err.message)
  })

middleware(app)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
