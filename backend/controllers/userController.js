import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registeredUser = async () =>{
    try{
        const {name,username,password} = req.body;
        if(!name || !email || !password){
            return res.json({success : false,message : "Missing Details"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const userData = {
            name, email, password : hashedPassword // credit will aded defautly
        }
        const newUser = new userModel(userData);
        const user = await newUser.save();
        // now we will generate one token that will be send in response to enable the logina nd reg in frontene d
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
        res.json({success:true,token,user : {name : user.name}});
    }
    catch(err){
        console.log(err);
        res.json({success : false,message : ""})
    }

}

