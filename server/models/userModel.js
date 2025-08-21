import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
  lastName: String,
  email: {
        type:String,
        required:[true, "Email address is required"],
        unique:[true, "Email already in use"],
        trim:true,
        lowercase:true,
    },
  password:{
        type:String,
        trim:true,
        minlength:[8, "minimum password length must be 8 characters"]
    },
    role:{
        type:String,
        enum:["user", ,"admin"],
        default:"user"
    }
});

//using Schema to create model 
export const User = mongoose.model("User",userSchema);