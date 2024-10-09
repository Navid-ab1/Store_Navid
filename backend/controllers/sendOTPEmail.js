const Redis = require("ioredis");
const userRedis = new Redis({
    host: '127.0.0.1',
    port: 6379,
});

exports.sendEmail = async (req, res) => {
    try {
        // Dynamically import nanoid
        const otp_checker = require('./checkOTPAuth.js')
        const { customAlphabet } = await import('nanoid');
        const generateOTP = customAlphabet('1234567890', 5);
        const User = require("../models/user.js");

        const OTP = generateOTP();

        const emailAddress = req.body.email;

        // Check if emailAddress exists
        if (!emailAddress) {
            return res.status(400).json({ message: 'Email address is required' });
        }

        const user = await User.findOne({ where: { Email: emailAddress } });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        await userRedis.set(emailAddress,OTP,'EX',600);

        console.log('Generated OTP for', emailAddress, ':', OTP);
        return res.status(200).json({ message: 'OTP generated and stored' });
        value_otp = otp_checker(OTP)


        // nodeoutlook.sendEmail({
        //     auth: {
        //         user: 'backend_test@outlook.com',
        //         pass: 'wbNaab98#@',
        //     },
        //     from: 'backend_test@outlook.com',
        //     to: emailAddress,
        //     subject: 'OTP',
        //     text: `Your OTP password is ${OTP} by Navid Cop.`,
        //     onError: (e) => {
        //         console.error('Error sending email:', e);
        //         if (!res.headersSent) {
        //             res.status(500).json({ message: `An error occurred while sending the email: ${e.message}` });
        //         }
        //     },
        //     onSuccess: (i) => {
        //         console.log('Email sent successfully:', i);
        //         if (!res.headersSent) {
        //             res.status(200).json({ message: 'Email sent successfully' });
                    
        //         }
        //     },
        // });
    } catch (err) {
        console.error('An internal error occurred:', err);
        res.status(500).json({ message: 'An internal server error occurred' });
    }
};
