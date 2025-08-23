import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registeredUser = async (req,res) =>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({success : false,message : "Missing Details"})
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
        res.status(201).json({success:true,token,user : {name : user.name}});
    }
    catch(err){
        console.log(err);
        res.json({success : false, message : err.message})
    }
}

const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message: "User does not exists"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
            res.json({success:true,token,user : {name : user.name}});
        }else{
            return res.status(401).json({success:false, message : 'Invalid credentials'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({success : false, message : err.message})
    }
}

const userCredits = async (req,res) => {
    try{ 
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({success:true, credits: user.creditBalance, user: {name : user.name}});
    }   
    catch(error){
        console.log("Bhai error : ",error.message)
        res.json({success:false, message: error.message});
    }
}  

export {registeredUser, loginUser,userCredits}
