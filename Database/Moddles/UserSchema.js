const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true
    // },
    FirstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
        // DOB:{
        //     type:Date,
        //     required:true
        // },
    Gender:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    acname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    actype:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    Father_Name:{
        type:String,
        required:true
    },
})
const user = mongoose.model("Banking",userSchema);

module.exports = user;