import express from "express"
import { verifyJWT } from "../middleware/verifyJWT.js"
import { getMe, login, registerUser } from "../controllers/auth/auth.controller.js"


const authRouter = express.Router()


authRouter.post("/registerUser", registerUser)
authRouter.post("/login", login)
authRouter.get("/getMe", verifyJWT, getMe)


export default authRouter