 const asyncHandler = require("express-async-handler");
const User = require("../Models/messageModel")
 
 const registerUser =  asyncHandler(async(req,res) =>{
  const {name, email,password,pic} = req.body;
    
    if(!name || email || password){
        resizeBy.status(400);
        throw new Error("please enter all the fields");
    }
      
    const UserExists = await User.findOne({email});
    
    if(UserExists){
        resizeBy.status(400);
        throw new Error("user already exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            pic: user.pic,
        })
    } else{
        res.status(400);
        throw new Error("failed to create user");
    }

 });

 module.exports = {registerUser}