const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    password:String,
    rating:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('UserSIH',userSchema);