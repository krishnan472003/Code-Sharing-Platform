import { Router } from "express";
import { getChats } from "./Routers/getChats";
import { joinUser } from "./Routers/joinUser";
import { postMessage } from "./Routers/postMessage";
import { Project } from "./Routers/AddProject";
import {viewProject} from "./Routers/viewProject"

export const ProjectModule = () => {
  const router = Router();
  router.use("/project", Project());
  router.use("/project", getChats());
  router.use("/project", postMessage());
  router.use("/project", joinUser());
  router.use("/project", viewProject());
  return(router)
};


