import { Router } from "express";
import { Project } from "./Routers/addProject";
import { getChats } from "./Routers/getChats";
import { joinUser } from "./Routers/joinUser";
import { postMessage } from "./Routers/postMessage";

export const ProjectModule = () => {
  const router = Router();
  router.use("/project", Project());
  router.use("/project", getChats());
  router.use("/project", postMessage());
  router.use("/project", joinUser());
  return(router)
};
