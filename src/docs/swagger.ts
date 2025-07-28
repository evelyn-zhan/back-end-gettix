import swaggerAutogen from "swagger-autogen";
import { NODE_ENV } from "../utils/env";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];
const doc = {
    info: {
        version: "v0.0.1",
        title: "GetTix API Documentation",
        description: "Documentation of GetTix Event Management Web API"
    },
    host: NODE_ENV == "production" ? "back-end-gettix.vercel.app" : "localhost:3000",
    basePath: "/api",
    schemes: [NODE_ENV == "production" ? "https" : "http"],
    securityDefinitions: {
        bearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header"
        }
    },
    definitions: {
        LoginRequest: {
            identifier: "axeldz",
            password: "rawr"
        }
    }
    // servers: [
    //     {
    //         url: "http://localhost:3000/api",
    //         description: "Local server"
    //     },
    //     {
    //         url: "https://back-end-gettix.vercel.app/api",
    //         description: "Deployed Server"
    //     },
    // ],
    // components: {
    //     securitySchemes: {
    //         bearerAuth: {
    //             type: "http",
    //             scheme: "bearer"
    //         }
    //     },
    //     schemas: {
    //         LoginRequest: {
    //             identifier: "axeldz",
    //             password: "rawr"
    //         }
    //     }
    // }
};

swaggerAutogen({ swagger: "2.0" })(outputFile, endpointsFiles, doc);