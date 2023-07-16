import jwt from 'jsonwebtoken'
import { mongodb } from "../../db"
import { UserModel } from "./SignupService"
import { LoginData } from "../Routers/LoginEndpoint"
import bcrypt from 'bcrypt'

export const validateLogin = async (loginData: LoginData) => {
  mongodb("user");
  let token:string;
  await UserModel.findOne({ email: loginData.email })
    .then(async (queryData) => {
      let passFlag = await bcrypt.compare(loginData.password, queryData.password);
      if(passFlag==true){
        token = queryData.accessToken
      }
      else{
        token = null
      }
    });
    console.log(token)
    return(token)
}
