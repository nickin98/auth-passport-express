const {User} = require('../models/user');

class AuthController {
    async signup(req, res, next) {
        
        return res.status(200).json({token});
    }

    async login(req, res, next) {
        
        return res.status(200).json({token});
    }

}

module.exports = new AuthController()