import { Router } from "express";
import { LoginData } from "../authInterface";
// import { mongodb } from "../../db";
import { UserModel } from "../Model/SignupSchema";
import { compare } from 'bcrypt';


let data: LoginData;

//api endpoint
export const Logout = () => {
  const router = Router();
  
  router.post("/logout", async (req, res) => {
    const { token } = req.body;

    try {
      const updatedUser = await UserModel.findOneAndUpdate(
        { accessToken: token },
        { $unset: { accessToken: 1 } },
        { new: true }
      );

      if (updatedUser) {
        res.status(200).json({ message: "Logout successful!" });
      } else {
        res.status(401).json({ message: "Invalid or expired token." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error while logging out." });
    }
  });


  return router;
};
