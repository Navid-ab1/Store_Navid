const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
app.use(express.json());
console.log(process.env.OUTLOOK_USER)
console.log(process.env.OUTLOOK_PASS)
let generateOTP;
(async()=>{
    const {customAlphabet}=await import('nanoid')
    generateOTP =customAlphabet('1234567890',6)
})();

app.post("/auth",(req,res) =>{
    const OTP = generateOTP();
    const nodeoutlook = require('nodejs-nodemailer-outlook');
    nodeoutlook.sendEmail({
        auth:{
            user:'backend_test@outlook.com',
            pass:'wbNaab98#@',
        },
        from:'backend_test@outlook.com',
        to:req.body.email,
        subject:'OTP',
        text:`Your OTP password is ${OTP} by Navid Cop.`,
        onError:(e) =>res.status(500).json({message:`an error occurred ${e}`}),
        onSuccess:(i)=>res.status(200).json({message:i}),
    });
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})

