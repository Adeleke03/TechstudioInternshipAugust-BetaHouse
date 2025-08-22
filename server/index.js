import express from "express";
import { connectDB } from "./config/db.js";
import authrouter from "./routes/authroute.js"
import propertyrouter from "./routes/propertyroute.js"
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";



const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
dotenv.config();


app.use(express.json());
app.use(bodyParser.json());

//Connecting db to index
await connectDB()

//Define Simple Route 
app.get('/',(req,res)=>{
    res.send('Home Page');
});

// app.post('/user', async(req,res)  =>{
//     const {firstName, lastName, email, password} = req.body;
//     //create/save user info to mongodb through model 
//     const newUser = new User({
//         firstName, lastName, email, password
//     });
//     //save to mongodb
//     await newUser.save();
//     console.log(newUser);
//     res.send('User Added')
    
// })

app.use('/api/auth', authrouter);
app.use('/api/property', propertyrouter)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);    
})