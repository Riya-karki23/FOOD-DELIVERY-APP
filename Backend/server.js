import express from 'express'
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js';

import 'dotenv/config'


const app=express();
const port=process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'));
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)

app.listen(port,()=>{
    console.log(`appp running on port ${port}`);
})

// mongodb+srv://riya:83940@cluster0.yifk1.mongodb.net/?