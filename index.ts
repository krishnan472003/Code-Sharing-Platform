import express from "express";
import {Signup} from "./Authentication/Routers/SignupEndpoint";
import { Login } from "./Authentication/Routers/LoginEndpoint";
import {config} from "dotenv"
import { Account } from "./Accounts/Account";
import { Project } from "./Projects/AddProject";

// import {mongodb} from "./db"

config()
const app :express.Application = express();
const port: number = Number(process.env.PORT);

 // Add this line to parse request bodies as JSON
 app.use(express.json()) 
 app.use("/api",Signup());
 app.use("/api",Login());
 app.use("/api",Account());
 app.use("/api",Project())


app.listen( port||3000, () =>{
    console.log("Listening on port " + port)
} );   