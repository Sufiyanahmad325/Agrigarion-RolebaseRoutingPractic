import { User } from "../models/user.schema.js"



export const userDetails = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome User"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}