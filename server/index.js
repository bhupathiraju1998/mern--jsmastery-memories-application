import express from 'express';
import bodyparser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes)

const CONNECTION_URL = 'mongodb://venu:gopal@ac-y0cr1mv-shard-00-00.0hvty2u.mongodb.net:27017,ac-y0cr1mv-shard-00-01.0hvty2u.mongodb.net:27017,ac-y0cr1mv-shard-00-02.0hvty2u.mongodb.net:27017/?ssl=true&replicaSet=atlas-6ecwvn-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL,{})
    .then(()=>app.listen(PORT,()=> console.log("running")))
    .catch((error) => console.log("error",error.message)) 
 
