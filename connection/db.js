import mongoose from "mongoose";


export const Connection = async(Mongoose_URL)=>{
       try{
await mongoose.connect(Mongoose_URL,{useUnifiedTopology:true, useNewUrlParser:true})
    console.log("Connected Db Successfully")
}catch(err){
        console.log('err',err.message)
    }
}
