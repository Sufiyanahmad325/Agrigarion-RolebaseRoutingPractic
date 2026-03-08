import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { isAdmin } from "../middleware/role.middleware.js";
import { adminDetails } from "../controllers/admin.controller.js";


const adminRouter = express.Router()

adminRouter.use(verifyJWT , isAdmin)

adminRouter.get("/adminDetails" , adminDetails)

export default adminRouter;