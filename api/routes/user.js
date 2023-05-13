const ex = require('express')
const router = ex.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')



router.get('/test',(req,res)=>{
    res.send('working')

})



router.post('/singup',async(req,res)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        const {password, password_confirmation}=req.body
        if(password!==password_confirmation){
            return res.status(400).json({
                message: "Passwords do not match"
            })
        }
        const isexistinguser = User.findOne({email: req.body.email})
        if (isexistinguser){
            return res.status(400).json({
                err:"User already existn Try a diffrent Email"
            })
        }
        else
        {
            const user = User.create({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                password:hash,
                password_confirmation:hash
            })
            res.status(200).json({
                user,message:"User created successfully"
            })
                
               
        }
        
    })
})
    



module.exports=router;