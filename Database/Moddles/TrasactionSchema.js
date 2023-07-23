const mongoose = require("mongoose")
const transSchema = mongoose.Schema({
    userone:{
        type:String,
        required:true
    },
    usertwo:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true
    },

})
const transactions = mongoose.model("Hist",transSchema);

module.exports = transactions;