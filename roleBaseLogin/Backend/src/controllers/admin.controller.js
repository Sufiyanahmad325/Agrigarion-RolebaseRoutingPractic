

export const adminDetails = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome Admin"
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: "Internal server error"
        })
    }
}