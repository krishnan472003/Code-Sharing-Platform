import mongoose from "mongoose";
import { Router } from "express";
import { UserModel } from "../Controller/SignupService";

const Token = ()  =>{

    const router = Router()

    router.post('/tokenValidation',(req,res)=>{
        const jwtToken = req.body.token;
        UserModel.find({accessToken:jwtToken})
        .then(()=>{
            res.json({login:"Success"});
            res.status(200)
        })
        .catch(()=>{
            res.json({login:"Failure"})
            res.status(404)
        })
    })
    return(router)
}