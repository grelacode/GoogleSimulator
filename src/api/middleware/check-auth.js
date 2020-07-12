const jwt = require('jsonwebtoken');

const checkauth = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
        req.pin = decoded;
        next();
    } catch (errorr) {
        return res.status(401).json({
            message: 'auth failed'
        })
    }
    
}

module.exports = checkauth;