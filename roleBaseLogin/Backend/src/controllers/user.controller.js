import { User } from "../models/user.schema.js"



export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }


        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }


        const user = await User.create({
            name: name,
            email: email,
            password: password
        })


        console.log('hello')

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const isMatch = await user.isPasswordCorrect(password)

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }


        const cookieOptions = {
            httpOnly: true,
            sameSite: "Strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        }

        const accessToken = await user.generateAccessToken()



        res.status(200).cookie("accessToken", accessToken, cookieOptions).json({
            success: true,
            message: "Login successful",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}