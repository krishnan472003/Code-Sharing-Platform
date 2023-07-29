import express from "express";
import {Signup} from "./Authentication/Routers/Signup";
import { Login } from "./Authentication/Routers/Login";
import {getChats} from "./Projects/Routers/getChats";
import {config} from "dotenv"
import { Project } from "./Projects/Routers/AddProject";
import { Token } from "./Authentication/Routers/tokenValidation";
import { postMessage } from "./Projects/Routers/postMessage";
import cors from 'cors'
import { mongodb } from "./db";
import { joinUser} from "./Projects/Routers/joinUser"

// import {mongodb} from "./db"

config()

const app :express.Application = express();
app.use(cors({
    origin: 'http://localhost:3000'
  }));  
const port: number = Number(process.env.PORT);

 // Add this line to parse request bodies as JSON
 mongodb();
 
 app.use(express.json()) 
 app.use("/api",Signup());
 app.use("/api",Login());
 app.use("/api",Project());
 app.use("/api",Token());
app.use("/api",getChats());
app.use("/api",postMessage());
app.use("/api",joinUser())


app.listen( port||5000, () =>{
    console.log("Listening on port " + port)
} );   
