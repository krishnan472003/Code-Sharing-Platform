import express, { Router } from 'express'
import { UserModel } from '../../Authentication/Model/SignupSchema';
import { ProjectModel } from '../Model/ProjectSchema';


export const Project = () => {
    const router = Router();
    router.post("/addproject", (req, res) => {
      const rawData = {
        project: req.body.project,
        token: req.body.token,
      };
  
      // Check if the project already exists in the database
      ProjectModel.findOne({ name: rawData.project }).then((findData) => {
        if (findData == null) {
          // If the project doesn't exist, find the user by accessToken and update its projects array
          UserModel.findOneAndUpdate(
            { accessToken: rawData.token || "" },
            { $push: { projects: [rawData.project] } }
          )
            .then((data) => {
              // After updating the user's projects array, create the new project
              return ProjectModel.create({ name: rawData.project, members: [data.email] });
            })
            .then((data) => {
              res.status(200).json({ message: `Project added ${data.name}` });
            })
            .catch((err) => {
              res.status(404).json({ error: err });
            });
        } else {
          res.status(400).json({ message: "Project exists" });
        }
      });
    });
  
    return router;
  };
  