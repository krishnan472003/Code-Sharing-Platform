import mongoose, { Model } from "mongoose";
import { Chat } from "../projectInterface";

const ChatSchema = new mongoose.Schema<Chat>({
        senderMail: { type: String, required: true },//email
        message:{type:String,required:true},
        project:{type:String, required: true},
        timestamp:{type: Number,required: true} ,
        type: {type:String,required: true}
      });

export const ChatModel = mongoose.model<Chat>('chat', ChatSchema);
      
