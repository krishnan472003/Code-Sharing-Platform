import express, { Router } from "express"
import { UserModel } from "../Model/SignupSchema"

export const Token = ()=>{
    const router = Router()
    router.post("/token",async (req,res)=>{
    await UserModel.findOne({ accessToken: req.body?.token || "" })
        .then((data)=>{
            console.log(data)
            let {name,projects} = data
            res.json({name,projects})
            res.status(200)
        })
        .catch((err)=>{
            console.log(err)
            res.status(404);
            res.json(err)
            console.log(err)
        })
    })
    return router
}