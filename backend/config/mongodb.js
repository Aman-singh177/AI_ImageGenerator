import mongoose from 'mongoose'

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Imgify')
    .then(() => console.log("DB Connected"));
    }
    catch(err){
        console.log("Database error ",err);
    }
}

export default connectDB;