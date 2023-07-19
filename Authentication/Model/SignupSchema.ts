import mongoose, { Model } from "mongoose";
import { SignupData } from "../authInterface";
// import {SignupData} from "../Routers/SignupEndpoint"

const SignupSchema = new mongoose.Schema<SignupData>({
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        age: { type: Number, required: true } ,      
        accessToken: { type: String, required: true },
        projects: { type: [String], required: false }
      });

export const UserModel = mongoose.model<SignupData>('userData', SignupSchema);
      
