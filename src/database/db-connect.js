import mongoose from "mongoose";

const dbConnection = async ()=>{

    try{
        await mongoose.connect(process.env.URI)
        console.log("Database Connected")

    }catch(err){
        console.log(err.name);
    }
}


export default dbConnection;