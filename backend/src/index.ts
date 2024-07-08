import express,{Express} from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoute";
import { urlRouter } from "./routes/urlRoutes";
const app:Express=express();
const port =process.env.PORT||3000;
app.use(cors());
app.use(express.json());
app.use("/api/v1/user",userRouter);
app.use("/api/v1/url",urlRouter);
app.listen(port,()=>{
    console.log(`server listening on port: ${port}`);
})