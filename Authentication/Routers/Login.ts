import { Router } from "express";
import { LoginData } from "../authInterface";
// import { mongodb } from "../../db";
import { UserModel } from "../Model/SignupSchema";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

let data: LoginData;

//api endpoint
export const Login = () => {
  const router = Router();
  console.log("In Login");

  router.post("/login", async (req, res) => {
    data = {
      email: req.body.email,
      password: req.body.password,
    };

    let jwtToken: string;

    console.log("connected");
    let queryData = await UserModel.findOne({ email: data.email });
    if (!queryData) {
      res.status(200).json({ error: "Wrong credentials" });
      return;
    }

    const isPasswordValid = await compare(data.password, queryData.password);

    if (isPasswordValid) {
      jwtToken = await jwt.sign(JSON.stringify(data), process.env.TOKEN_SECRET);
      queryData = await UserModel.findOne({ email: data.email });
      queryData.accessToken = jwtToken;
      await queryData.save();
      if (jwtToken == null) {
        res.status(400).json({ error: "Wrong credentials" });
      }
       else {
        res.status(200).json({ token: jwtToken });
      }
    } else {
      res.status(200).json({ message: "wrong mail id" });
    }
  });

  return router;
}
