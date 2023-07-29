import { Router,Response,Request } from "express";
import { UserModel } from "../../Authentication/Model/SignupSchema";
import { ProjectModel } from "../Model/ProjectSchema";

export const joinUser =()=>{
    const router = Router();
    router.post("/join",async (req:any,res:any)=>{
        let sender = req.body.sender;
        let projectName = req.body.projectName;
        let accessToken = req.body.token
        ProjectModel.findOneAndUpdate({name:projectName},{ $push: { members: [sender] } })
        .then((data)=>{
            return UserModel.findOneAndUpdate({accessToken:accessToken},{$push:{project:[sender]}})
        })
        .then((data)=>{
            res.status(200).json({message:"person added"})
        })
        .catch((err)=>{
            res.status(400).json({error:err})
        })
    })
    return router
}

