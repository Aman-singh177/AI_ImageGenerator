import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb';

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.get('/',(req,res) => {
    res.send("API working")
})

 

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})
