import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dbConnect from "./utils/database";

import router from "./routes/api";
import docs from "./docs/route";

async function init() {
    try {
        const dbConnection = await dbConnect();

        console.log(dbConnection);

        const app = express();
        const PORT = 3000;

        app.use(bodyParser.json());
        app.use(cors());

        app.get("/", (req, res) => {
            res.status(200).json({
                message: "Server is running.",
                data: null
            });
        });

        app.use("/api", router);

        docs(app);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}

init();