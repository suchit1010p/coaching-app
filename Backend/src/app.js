import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: ['http://localhost:8000', 'http://localhost:3000', 'http://localhost:5173'],
    credentials: true
}))


// limiting the request so that surver can hold the load 
app.use(express.json({ limit: "16kb" }))
// exncode url data and put it in object form  
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// stors static files in public
app.use(express.static("public"))

app.use(cookieParser())





import userRoute from "./routers/user.route.js"

app.use("/api/v1/users", userRoute)


export { app }