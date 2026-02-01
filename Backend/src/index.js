import "./config.js";
import connectDB from "./db/db.js";
import { app } from "./app.js"
 
connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(`MongoDB connection fail !!!`, error)
})
