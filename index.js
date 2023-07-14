import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./src/routes/router.js"

dotenv.config();
const app = express();
const accessLogStream = rfs("access.log",{
    interval:"id",
    path: join(__dirname,"log")
});

const port = process.env.PORT || 4000;
const isProduction = process.env.NODE_ENV === "production";


app.use(helmet());
app.use(morgan("tiny"));
app.use( isProduction ? morgan("combined",{ stream: accessLogStream}):morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api",routes);

app.listen(port,()=>{
    console.log(`Server is listning on port: ${port}`);
})
