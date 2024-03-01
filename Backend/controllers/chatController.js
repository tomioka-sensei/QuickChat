const asyncHandler = require("express-async-handler");
const Chat = require("../Models/chatModel")
const accessChat = asyncHandler(async(res,req)=>{
    const {userId} =  req.body;

    if(!userId){
        console.log("userId param not sent with the request");
        return res.sendStatus(400);
    }

    var isChat = await Chat.find({
        isGroupChat: false,
        $and : [
            {users : {$elemMatch:{$eq:req.user._id}}},
            {users : {$elemMatch : {$eq: userId}}}
        ],
    })
})