import express from "express";
import {Signup} from "./Authentication/Routers/Signup";
import { Login } from "./Authentication/Routers/Login";
import {config} from "dotenv"
import { Project } from "./Projects/Routers/AddProject";
import { Token } from "./Authentication/Routers/tokenValidation";

// import {mongodb} from "./db"

config()
const app :express.Application = express();
const port: number = Number(process.env.PORT);

 // Add this line to parse request bodies as JSON
 app.use(express.json()) 
 app.use("/api",Signup());
 app.use("/api",Login());
 app.use("/api",Project());
 app.use("/api",Token());



app.listen( port||3000, () =>{
    console.log("Listening on port " + port)
} );   
