import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"
import AuthRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.router.js";
import adminRouter from "./routes/admin.router.js";

const app = express();



app.use(express.json()); // it is user to parse json body
app.use(express.urlencoded({ extended: true })); // it is used to parse urlencoded body
app.use(express.static('public')); // it is used to serve static files from public folder exmaple: images, css, js files

app.use(cookieParser()); // it is used to parse cookies

app.use(cors({origin: [process.env.CORS_ORIGIN ,'http://localhost:5173'], credentials: true})); // it is used to enable cors such as accessing api from different domain , creadentials: it is used to send cookies from client to server


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/auth', AuthRouter)
app.use('/admin', adminRouter)
app.use('/user', userRouter)

export default app;