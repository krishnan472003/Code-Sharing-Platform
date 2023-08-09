import { Router, Response, Request } from "express";
import { ChatModel } from "../Model/ChatSchema";
import { UserModel } from "../../Authentication/Model/SignupSchema";
import { log } from "console";


export const postMessage = () => {
    const router = Router()
    router.post('/postMessage', async (req: Request, res: Response) => {//type, token, project
        // console.log(req.body)
        const accessToken:string = req.body.token
        const user = await UserModel.findOne({accessToken})
        console.log(user);
        if(user !== null){
            ChatModel.create({
                senderMail: user.email,
                project: req.body.project,
                timestamp: Date.now(),
                type: req.body.type,
                message: req.body.message
            })
                .then(() => {
                    res.json({ message: "message sent successfully" })
                    res.status(400)
                })
                .catch((err) => {
                    res.json({ err: err })
                    res.status(500)
                })
        }
    })

    return router
}