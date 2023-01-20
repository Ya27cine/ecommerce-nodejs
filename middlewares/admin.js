
exports.isAdmin = (req, res, next) => {
    const role = req.auth.role;
    if( role != 1){
        return res.status(403).json({
                error: "Resource Admin : Access Denied !!"
            })
    }
    next();
}