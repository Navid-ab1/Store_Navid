const User = require("../models/user");
const nodeoutlook = require('nodejs-nodemailer-outlook');
const Redis = require("ioredis");
const userRedis = new Redis({
    host:'127.0.0.1',
    port:6379,
});

exports.otp_checker = async(req,res,otp)=>{
    try{
        const {otp,email} = req.body;
        if (!otp || !email) {
            return res.status(400).json({ message: 'OTP and email are required.' });
        }
        const value = await userRedis.get(`${email}`);
        if (otp === value){
            // change the user password
            res.status(200).json({ message: 'OTP is correct, password changed.' });
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
exports.sendEmail = async (req, res) => {
    try {
        // Dynamically import nanoid
        const { customAlphabet } = await import('nanoid');
        const generateOTP = customAlphabet('1234567890', 6);
        const OTP = generateOTP();

        const emailAddress = req.body.email;

        // Check if emailAddress exists
        if (!emailAddress) {
            return res.status(400).json({ message: 'Email address is required' });
        }

        const email_query = await User.findOne({ where: { Email: emailAddress } });
        if (!email_query) {
            return res.status(401).json({ message: 'User not found' });
        }
        userRedis.set(`${emailAddress}`,`${OTP}`)

        console.log('Sending email to:', emailAddress);

        nodeoutlook.sendEmail({
            auth: {
                user: 'backend_test@outlook.com',
                pass: 'wbNaab98#@',
            },
            from: 'backend_test@outlook.com',
            to: emailAddress,
            subject: 'OTP',
            text: `Your OTP password is ${OTP} by Navid Cop.`,
            onError: (e) => {
                console.error('Error sending email:', e);
                if (!res.headersSent) {
                    res.status(500).json({ message: `An error occurred while sending the email: ${e.message}` });
                }
            },
            onSuccess: (i) => {
                console.log('Email sent successfully:', i);
                if (!res.headersSent) {
                    res.status(200).json({ message: 'Email sent successfully' });
                }
            },
        });
    } catch (err) {
        console.error('An internal error occurred:', err);
        res.status(500).json({ message: 'An internal server error occurred' });
    }
};
