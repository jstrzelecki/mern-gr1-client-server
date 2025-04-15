import express, {Express, Request, Response} from 'express';
import path  from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./database";
import taskRoutes from "./routes/taskRoutes"

(async () =>{
   try{
      await connectDB();
      console.log("Connected!")
   }catch (err:unknown){
      if (err instanceof Error){
         console.log(err)
      }else{
         console.log("nie wiem o co chodzi")
      }
      process.exit(1);
   }
} )()


//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var indexRouter = require('./routes');
//var usersRouter = require('./routes/users');
dotenv.config();

const app: Express = express();
//app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use("/tasks", taskRoutes)

//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.get("/", (req:Request, res:Response) => {
   res.json({message: "API EXPRESS+MONGO działa!!!"}) 
})


export default app;
