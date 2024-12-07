import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/connectDB.mjs";
import rootRouter from "./routes/root.mjs";
import userRouter from "./routes/user.mjs";
import bodyParser from "body-parser";
connectDB();
const app = express();

//use body-parser
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());

app.use(morgan("combined"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", rootRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server Started!!!");
});
