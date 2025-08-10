import express, { Request, Response } from "express";
import cors from "cors"
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/NotFound";



const app = express();


app.use(express.json())
app.use(cors())
app.use("/api/v1", router)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome To Ph Tour Management Backend"
    })
})

app.use(globalErrorHandler)

app.use(notFound)

export default app;

// Main work flow : model-> services -> controller -> Route_Matching

// route matching -> controller -> services -> model ->db
