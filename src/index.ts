import express from "express";
import bodyParser from "body-parser";

import dbConnect from "./utils/database";

import router from "./routes/api";

async function init() {
    try {
        const dbConnection = await dbConnect();

        console.log(dbConnection);

        const app = express();
        const PORT = 3000;

        app.use(bodyParser.json());

        app.use("/api", router);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}

init();