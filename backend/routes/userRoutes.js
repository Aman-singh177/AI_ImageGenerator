import express from 'express'
import {registeredUser, loginUser, userCredits, paymentRazorpay} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registeredUser)
userRouter.post('/login', loginUser)
// to execute usercredits we need userID to get userID we need to execute userAuth   
userRouter.get('/credits', userAuth, userCredits)
userRouter.post('/pay-razor', userAuth, paymentRazorpay)

export default userRouter 

// localhost:4000/api/user/register  when we hit this end point  then it will execute 
// this registeredUser controller function

