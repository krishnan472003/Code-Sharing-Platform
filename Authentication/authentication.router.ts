import { Router } from "express"
import { Login } from "./Routers/login";
import { Signup } from "./Routers/signup";
import { Token } from "./Routers/tokenValidation";
import { Logout } from "./Routers/logout";
export const AuthModule = ()=>{
    const router = Router();
    router.use("/auth",Signup());
    router.use("/auth",Login());
    router.use("/auth",Token());
    router.use("/auth", Logout()); // Use the Logout router

    return router
}