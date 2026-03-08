import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { isUser } from "../middleware/role.middleware.js";
import { userDetails } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.use(verifyJWT , isUser)

userRouter.get("/userDetails" , userDetails)


export default userRouter;