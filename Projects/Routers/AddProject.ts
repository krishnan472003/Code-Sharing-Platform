import express, { Router } from 'express'
import { UserModel } from '../../Authentication/Model/SignupSchema';
import { ProjectModel } from '../Model/ProjectSchema';


export const Project = () => {
    const router = Router();
    router.post("/addproject", async (req, res) => {
        //token,project
        if (req.body.projects != null) {
            await UserModel.findOneAndUpdate({ accessToken: req.body?.token || "" }, { $push: { projects: [req.body.projects] } })
                .then((data) => {
                    return ProjectModel.create( {name:req.body.projects, $push: {members:[data.name]} })
                })
                .then((data) => {
                    res.status(200).json({message:"Project added"})
                })
                .catch((err) => {
                    res.json({ error: "Invalid data" })
                    res.status(404);
                })
        }
        else {
            res.json({ message: "enter project name" })
            res.status(404);
        }

    })
    return (router)
}