const http = require('http') 
const express = require('express') 
const cors = require('cors')
const socketIO = require('socket.io')

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.get("/", (req,res)=>{
    res.send("Hell its working");
})



const server = http.createServer(app);
const io = socketIO(server);
io.on("connection", ()=>{
    // console.log("Server connected to React"); 
})




server.listen(port, ()=>{
    console.log(`Server is working on http://localhost:${port}/`);
})