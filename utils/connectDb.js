import mongoose from 'mongoose'

const connection ={}


async function connectDb(){

    if (connection.isConnected){
        // Use existing db connection
        console.log("Using existing connection");
        return;
    }

    //use new database connection
    const db = await mongoose.connect(process.env.MONGO_SRV, {useCreateIndex:true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log("DB connected");
connection.isConnected = db.connections[0].readyState;

}

export default connectDb;