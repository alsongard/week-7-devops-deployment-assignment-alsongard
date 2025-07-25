const mongoose = require("mongoose");
const app = require("./server");


const PORT = process.env.PORT_NUMBER;
console.log(PORT)
const user = process.env.MONGO_USR;
const password = process.env.MONGO_PASSWD;



async function ConnectDB(){
    try
    {
        await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.f2dd9sx.mongodb.net/BugDB?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Connected to MongoDB");
       
        if (!process.env.VERCEL)
        {
            app.listen(portNumber, ()=>{
                console.log(`Server is listening on port ${portNumber}`);
            })
        }
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}

ConnectDB();