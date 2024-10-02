const User = require("../models/user");
let generateOTP;
(async()=>{
    const {customAlphabet}=await import('nanoid')
    generateOTP =customAlphabet('1234567890',6)
})();

exports.sendEmail=async (req,res) =>{
    const OTP = generateOTP();
    const nodeoutlook = require('nodejs-nodemailer-outlook');
    const emailAddress = req.body.email;
    const email_query = await User.findOne({where:{Email:emailAddress}})
    if(!email_query){
        return res.status(401).json({message:'user not found'})
    }
    console.log(emailAddress)
    nodeoutlook.sendEmail({
        auth:{
            user:'backend_test@outlook.com',
            pass:'wbNaab98#@',
        },
        from:'backend_test@outlook.com',
        to:emailAddress,
        subject:'OTP',
        text:`Your OTP password is ${OTP} by Navid Cop.`,
        onError:(e) =>res.status(500).json({message:`an error occurred ${e}`}),
        onSuccess:(i)=>res.status(200).json({message:i}),
    })
};

