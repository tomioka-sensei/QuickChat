const mongoose = require("mongoose");

const connectDb = async()=>{
   try{
    const con = mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`mongodb is connected ${(await con).Connection.host}`);
   } catch(error){console.log(`ERROR ${error.message}`)}
   
}


module.exports = connectDb;
