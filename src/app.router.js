import userRouter from './modules/user/user.router.js'
import authRouter from "./modules/auth/auth.router.js";
import placeSuggestionRouter from "./modules/placeSuggestion/placeSuggestion.router.js";
import connectDb from '../DB/connection.js';
import { globalErrorHandling } from './utils/errorHandling.js';





const initApp= (app,express)=>{
// convert buffer data 
app.use(express.json({}))
// app routing
    app.use("/uploads",express.static('uploads'));

app.get("/", (req, res) => res.send("Hello World!"));
app.use('/user',userRouter)
app.use("/auth", authRouter);
app.use("/newPlace", placeSuggestionRouter);
app.all("*",(req,res,next)=>{
    return res.json({message:"in_valid routing"})
})
// connection DB
connectDb()
// error handling middleware 
app.use(globalErrorHandling);
}


export default initApp