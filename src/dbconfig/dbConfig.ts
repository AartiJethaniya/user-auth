import mongoose from "mongoose";

const connect = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('MongoDb Connected Successfully')
        })

        connection.on('error' ,(err)=>{
            console.log('MongoDB Connection error, Please make sure MongoDB is running ' + err);
            process.exit()
        })
    } catch (error) {
        console.log("something went wrong")
        console.log(error)
    }
}

export default connect;