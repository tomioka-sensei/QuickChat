const express = require("express");
const { chats } = require("./Data/data");
const app = express();
const connectDb = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const dotenv = require("dotenv")
 dotenv.config();
 connectDb();


app.use("/api/user",userRoutes)

app.get("/",(req,res)=>{
    res.send("api is working")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("server is listening to port 5000")
})