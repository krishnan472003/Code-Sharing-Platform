import express, { Router } from 'express'
import { UserModel } from '../../Authentication/Model/SignupSchema';


export const Project = ()=>{
    const router = Router();
    router.post("/addproject",async (req,res)=>{

        if(req.body.projects != null ){
            await UserModel.findOneAndUpdate({accessToken:req.body?.token||""},{$push:{projects:[req.body.projects]}})
            .then((data)=>{
                res.status(200);
                res.json({message:"project added successfully"})
        })
        .catch((err)=>{
            res.json({error:"Invalid data"})
            res.status(404);
        })
    }
    else{
        res.json({message:"enter project name"})
        res.status(404);
    }
    
    })
    return(router)
}