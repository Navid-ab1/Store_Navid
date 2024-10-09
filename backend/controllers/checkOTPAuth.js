const User = require("../models/user");
const nodeoutlook = require('nodejs-nodemailer-outlook');
const Redis = require("ioredis");
const userRedis = new Redis({
    host:'127.0.0.1',
    port:6379,
});

exports.otp_checker = async(req,res)=>{
    try{
        const {otp,email} = req.body;
        if (!otp || !email) {
            return res.status(400).json({ message: 'OTP and email are required.' });
            
        }

        const storedOtp = await userRedis.get(`${email}`);
        if (otp === storedOtp){
            
            return res.status(200).json({ message: 'OTP is correct. Redirecting to password reset page.' });
        }
        else{
            console.error('The entered OTP is not corrected.')
            return res.status(401).json({message:'The entered OTP is not corrected.'})
        }
    }catch(error){
        console.error('Error in OTP checker:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};