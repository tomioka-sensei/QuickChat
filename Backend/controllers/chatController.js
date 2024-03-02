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
    }).populate("users" ,"-password")
          .populate("latestMessage")

       isChat = await UserActivation.populate(isChat,{
        path : "latestMessage.sender",
        select : "name pic email",
       });   


       if(isChat.length>0){
        res.send(isChat[0]);
       } else{
        var chatData = {
            chatName : "sender",
            isGroupChat : false,
            users: [req.user._id, userId],
            
        };

        try {
          const createdChat = await Chat.create(chatData);
          
          const Fullchat = await Chat.findOne({_id: createdChat._id}).populate("users" ,"-password")
           
          res.statusCode(200).send(Fullchat);

        } catch (error) {
            res.statusCode(400);

            throw new Error(error.message);
            
        }
       }
})

module.exports = accessChat;
