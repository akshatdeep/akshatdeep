const mongoose = require('mongoose')

const User = mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },

    last_name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    },

    password_confirmation:{
        type:String,
        require:true
    }
})


module.exports=mongoose.model('users',User)