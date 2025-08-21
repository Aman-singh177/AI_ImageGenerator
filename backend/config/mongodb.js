import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>{
        console.log("Database connected")
    })
    await mongoose.connect(`${url}/imagify`);
}

export default connectDB

