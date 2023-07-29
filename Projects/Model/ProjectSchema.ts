import mongoose, { Model } from "mongoose";
import {Project } from "../projectInterface";

const ProjectSchema= new mongoose.Schema<Project>({
    name: { type: String, required: true },
    members: { type: [String], required: true }
});
export const ProjectModel = mongoose.model<Project>('projects', ProjectSchema);
      
