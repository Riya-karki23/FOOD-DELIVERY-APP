import mongoose from "mongoose";


export const connectDB=async()=>{
await mongoose.connect('mongodb+srv://riya:83940@cluster0.yifk1.mongodb.net/food-delivery')
.then(()=>console.log('DB connected'));
}