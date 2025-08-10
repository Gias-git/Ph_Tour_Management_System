/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
    await mongoose.connect(envVars.DB_URL)

    server = app.listen(envVars.PORT, () => {
        try {
            console.log(`Server is listening port ${envVars.PORT}`)
        } catch (error) {
            console.log(error)
        }
    })
}



startServer();

