import express from 'express'
import router from './router/router.js'
import { dbConnection } from './config/database.js'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 4001

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use("/api", router)
dbConnection()
app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})