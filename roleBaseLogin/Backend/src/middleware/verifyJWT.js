import jwt from 'jsonwebtoken'
import { User } from '../models/user.schema.js'


export const verifyJWT = async (req, res, next) => {
 
     const token = req.cookies?.accessToken || req.headers.authorization?.replace("Bearer ", "");  // ye code kayse kam krta hai // do line hai dono kab kam krte hai or q 


    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decoded._id).select("-password") // password ko select nhi krna hai

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    req.user = user
    next()

   } 

    
    
