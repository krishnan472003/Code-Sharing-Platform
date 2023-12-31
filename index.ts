import express from "express";
import {config} from "dotenv"
import {AuthModule} from "./Authentication/authentication.router"
import cors from 'cors'
import { mongodb } from "./db";
import { ProjectModule } from "./Projects/project.router";

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
 app.use("/api",AuthModule())
 app.use("/api",ProjectModule())


app.listen( port||5000, () =>{
    console.log("Listening on port " + port)
} );   
