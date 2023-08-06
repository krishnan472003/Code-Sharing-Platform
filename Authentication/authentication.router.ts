import { Router } from "express"
import { Login } from "./Routers/login";
import { Signup } from "./Routers/signup";
import { Token } from "./Routers/tokenValidation";
export const AuthModule = ()=>{
    const router = Router();
    router.use("/auth",Signup());
    router.use("/auth",Login());
    router.use("/auth",Token());
    return router
}