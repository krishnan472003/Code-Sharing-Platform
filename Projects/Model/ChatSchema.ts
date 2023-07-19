import mongoose, { Model } from "mongoose";
import { Chat } from "../projectInterface";

// import {SignupData} from "../Routers/SignupEndpoint"

const ChatSchema = new mongoose.Schema<Chat>({
        sender: { type: String, required: true },
        timestamp:{type: Number,required: true} ,
        type: {type:String,required: true}
      });

export const ChatModel = mongoose.model<Chat>('userData', ChatSchema);
      
