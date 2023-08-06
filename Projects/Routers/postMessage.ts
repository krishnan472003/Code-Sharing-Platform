import { Router, Response, Request } from "express";
import { ChatModel } from "../Model/ChatSchema";
import { UserModel } from "../../Authentication/Model/SignupSchema";


export const postMessage = () => {
    const router = Router()
    router.post('/postMessage', async (req: Request, res: Response) => {//type, token, project
        const accessToken = req.body.token
        await UserModel.findOne({ accessToken: req.body?.token || "" })

        ChatModel.create({
            senderMail: req.body.email,
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
    })

    return router
}