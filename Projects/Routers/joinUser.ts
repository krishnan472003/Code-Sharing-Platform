import { Router, Response, Request } from "express";
import { UserModel } from "../../Authentication/Model/SignupSchema";
import { ProjectModel } from "../Model/ProjectSchema";

export const joinUser = () => {
  const router = Router();
  router.post("/join", async (req: any, res: any) => {
    const rawData = {
      project: req.body.project,
      accessToken: req.body.token,
    };
    UserModel.findOne({ accessToken: rawData.accessToken }).then((userData) => {
      if (userData.projects.includes(rawData.project)) {
        res.status(400).json({ message: "Already in project" });
      } 
      else {
        UserModel.findOneAndUpdate(
          { accessToken: rawData.accessToken },
          { $push: {projects:rawData.project} })
          .then((updatedData)=>{
                ProjectModel.findOne(({name:rawData.project}))
                .then((projectData)=>{
                    if(projectData.members.includes(updatedData.email)){
                        res.status(400).json({ message: "project already has the user" });
                    }
                    else{
                        ProjectModel.findOneAndUpdate({name:rawData.project},{$push:{members:[updatedData.email]}})
                        .then(()=>{
                            res.status(200).json({ message: "Succesfully joined the project" });
                        })
                    }
                })
          })
          .catch((err)=>{
            res.status(400).json({error:err})
          })
      }
    });
  });
  return router;
};
