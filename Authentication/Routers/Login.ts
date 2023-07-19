import { Router } from "express";
import { LoginData } from "../authInterface";
import { mongodb } from "../../db";
import { UserModel } from "../Model/SignupSchema";
import bcrypt from "bcrypt"
import { randomBytes } from "crypto";


let data: LoginData;
//api endpoint
export const Login = () => {
  const router = Router();
  console.log("In Login")
  router.post("/login", async (req, res) => {
   
    data = await {
      email: req.body.email,
      password: req.body.password
    };
      mongodb("user");
    
      
      let jwtToken:string;
      await UserModel.findOne({ email: data.email })
        .then(async (queryData:any) => {
          let passFlag = await bcrypt.compare(data.password, queryData?.password);
          if(passFlag==true){
            jwtToken = queryData?.accessToken
            if(jwtToken == null){
              res.status(400)
              res.json({error:"wrong Credentials"})
            }
            else{
              res.status(200);
              res.json({token:jwtToken})
            }
          }
          else{
            throw new Error("Wrong password")
          }
        });    
  });
  return router;
};

