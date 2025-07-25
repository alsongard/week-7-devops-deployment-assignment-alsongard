const mongoose = require("mongoose");
const cors = require("cors");
const app = require("./server");


const corsOption = {
    origin: function (origin, callback){
        if (process.env.NODE_ENV !== "production") // checks the environment at which t's running
        {
            console.log(`[DEV] Allowing origin: ${origin}`)
            return callback(null, true);
        }
        if (!origin)
        {
            return callback(null,true); // remember second argument: returns true(permit domain) or false(permit domain) 
        }
        const allowedDomains = [
            "https://bugtrackerwebapp.vercel.app",
            "http://localhost:5173"
        ]
        if (allowedDomains.includes(origin))// not equal the indexOf() method returns -1 if no value ns found in the array
        {
            return callback(null, true); // firstArgument: if we are expecting an error set this value as shown in else statemetn
            // second argument: boolean value which indeicates if the origin is allowed(true) : on not allowed(false)
        }
        else
        {
            callback(new Error(`Origin: ${origin} not allowed by cors`));
        }
    },
    methods:["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization']
};


app.options('/{*any}', cors(corsOption));
app.use(cors(corsOption));

app.use((req, res, next) => {
  // Manually set headers for all responses
  res.header("Access-Control-Allow-Origin", 
    process.env.NODE_ENV === "production" 
      ? "https://my-tasks-project.vercel.app" 
      : "*");
  
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const PORT = process.env.PORT_NUMBER;
console.log(PORT)
const user = process.env.MONGO_USR;
const password = process.env.MONGO_PASSWD;

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.f2dd9sx.mongodb.net/BugDB?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
        app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}: http://localhost:${PORT}`)})
        console.log("Connected to MongoDB");
    })
    .catch(err=>{
        console.log(`Error: ${err}`);
    })