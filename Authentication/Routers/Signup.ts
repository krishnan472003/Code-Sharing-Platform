import { Router, Request, Response } from "express";
import { mongodb } from "../../db";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SignupData } from "../authInterface";
import { UserModel } from "../Model/SignupSchema";

// import { sendData } from "./CreateUser";
// import { SignupSchema } from "./SignupSchema";


let data: SignupData;
//api endpoint
export const Signup = () => {
  const router = Router();
  mongodb("user")
  console.log("In Signup")
  router.post("/signup", async (req: Request, res: Response) => {
    data = await {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
      password: req.body.password,
      
    };
    
    data.password = await bcrypt.hash(req.body.password, 10);
    data.accessToken= jwt.sign(JSON.stringify(data), process.env.TOKEN_SECRET);
    res.json({token:data.accessToken})
    const newData = new UserModel(data)
    await newData.save()
        .then((data) => {
          console.log(`user with email ${data.email} is added`)
    })
  });
return router;
};

