import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    }
 },{timestamps:true})

 export default mongoose.model("userModel",userSchema,"user")
