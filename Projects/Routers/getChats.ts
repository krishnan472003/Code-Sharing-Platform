import { Router } from "express";
import { UserModel } from "../../Authentication/Model/SignupSchema";
import { ChatModel } from "../Model/ChatSchema";

export const getChats = () => {
  const router = Router();
  console.log("get chats");

  router.post("/chats", async (req, res) => {
    // send project and tokena
    const project = req.body.project;
        ChatModel.find({ project, timestamp: { $gt: Date.now() - 3600000 } })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err)=>res.json({err}))
      })
      

  return router;
};
