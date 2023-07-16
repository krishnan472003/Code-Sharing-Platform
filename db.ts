import mongoose from "mongoose"

const mongodb = (database:String) =>{
    mongoose.connect(process.env.MONGO_URL+ database).then(():void=>{
        console.log("Mongodb connected to "+ database);
    })
}

export {mongodb}
