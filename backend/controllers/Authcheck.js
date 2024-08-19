const {User} = require('../models')
const {where} = require("sequelize");
module.exports = {
    async login(req, res) {
        try {
            const {phoneNumber, password} = req.body
            const user = await User.findOne({where: {id: phoneNumber}})

            if (!user) {
                res.status(400).send({
                    error: 'The login information is invalid'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information is invalid'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                phoneNumber: phoneNumber,
            })


        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in'
            })
        }
    }

}