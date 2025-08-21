export const requireRole = (role) =>{
    return (req,res,next) =>{
        if (req.user.role === 'admin') {
            return next();
        }
        if (req.user.role !== role) {
            return res.status(403).send(`Forbidden: You don't have  ${role} to perform this action`)
        }
        next();
    };
};