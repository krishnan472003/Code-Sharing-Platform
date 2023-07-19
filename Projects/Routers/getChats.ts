import { Router,Request,Response } from "express";
import { UserModel } from "../../Authentication/Model/SignupSchema";
import { Project } from "../projectInterface";

const  Chats = () =>{
    const router = Router();
    router.post('/chats',async (req:Request,res:Response)=>{
        const project = req.body.project;
        let name;
        await UserModel.findOne({ accessToken: req.body?.token || "" })
        .then((data)=>{
            console.log(data)
            name = data.name;
            
        })
        .catch((err)=>{
            console.log(err)
            res.status(404);
            res.json(err)
            console.log(err)
        })
    })
    return router;
}