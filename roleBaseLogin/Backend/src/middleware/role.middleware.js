
export const isAdmin =(req,res,next)=>{
    if(req.user.role !== 'admin'){
    return res.status(401).json({
        message:'only admin can access this page'
    })
}
next()
}


export const isUser = (req,res, next)=>{
    if(req.user.role !== 'user'){
        return res.status(401).json({
            message:'only user can access this page'
        })
    }
    next()
}