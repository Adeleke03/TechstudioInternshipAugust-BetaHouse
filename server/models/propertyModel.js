import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    location:{
        type:String,
        required:[true,"location is required"]
    },
    bedrooms:{
        type:Number,
        required:[true,"bedrooms is required"]
    },
    bathrooms:{
        type:Number,
        required:[true,"bathrooms is required"]
    },
    price:{
        type:String,
        required:[true,"price is required"]
    },
    image:{
        type:String,
        required:[true,"please enter the property url"]
    },
    featured:{
        type:String,
        required:[true,"featured is required"]
    },
    purpose:{
        type:String,
        required:[true,"purpose is required"]
    },
    type:{
        type:String,
        required:[true,"type is required"]
    }
},{timestamps:true});

//Export model
const PROPERTY = mongoose.model("property",propertySchema);
export default PROPERTY