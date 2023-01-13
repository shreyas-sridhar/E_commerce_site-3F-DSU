const mongoose=require("mongoose")

const LoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
})

const register=new mongoose.model("DSI",LoginSchema);

module.exports= register;