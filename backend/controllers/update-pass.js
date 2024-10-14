exports.updatePass = async(req,res) =>{
    try{
        const User = require('../models/user.js')
        const {phoneNumber,pass} = req.body;
        await User.update({password:pass},
            {where:{
                phone_number:phoneNumber
                },
            },
        )
        return res.status(200).json({message:'Password changed successfully'})
    }
    catch(err){
        console.error('An error has happend:',err)
        res.status(500).json({message:"An internal server error occured"})
    }
}