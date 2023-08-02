import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import Controller from "@utils/interfaces/controller.interface";
import ErrorMiddleware from "@middleware/error.middleware";

class App {
    public express: Application;
    public port: number;
    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;

        // this.initializeDatabaseConnection();
        this.initializeMiddleWare();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    private initializeMiddleWare(): void {
        this.express
            .use(helmet())  
            .use(cors())
            .use(morgan('dev'))
            .use(express.json())
            .use(express.urlencoded({ extended: false }))
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use("/api", controller.router);
        });
    }

    private initializeErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App is up and running on port ${this.port}`);
        });
    } 
}

export default App;
