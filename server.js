import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoute.js"
const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
await connectDb()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)


app.listen(PORT, () => console.log("Server running on port: " + PORT))