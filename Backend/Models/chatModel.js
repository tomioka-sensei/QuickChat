const mongoose = require("mongoose");

const chatModel =  mongoose.Schema(
    {
    chatName : {type : string , trim: true},
    isGroupChat : {type : Boolean, default:false},
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:users,
    }],

    latestMessage :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: Messages,
    }],

    groupAdmin :[{
        type: mongoose.SchemaType.ObjectId,
        ref:users,

    }],
    },
    {
        timestamps:true,
    }
);

const chat = mongoose.model("chat",chatModel)

mongoose.export = chat;
