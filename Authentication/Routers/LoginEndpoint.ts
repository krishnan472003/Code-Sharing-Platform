import { Router } from "express";
import { validateLogin } from "../Controller/LoginService";

// import { sendData } from "./CreateUser";
// import { SignupSchema } from "./SignupSchema";
export interface LoginData {
  email?: string;
  password?: string;
}

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
     validateLogin(data).then((jwtToken)=>{
      if(jwtToken == null){
        res.status(400)
        res.json({error:"wrong Credentials"})
      }
      else{
        res.status(200);
        res.json({token:jwtToken})
      }
    })
    
  });
  return router;
};

