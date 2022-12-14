import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";

require("dotenv").config();

const db = require("./configs/connectDB");
db.connect();

const app = express();
const port = process.env.PORT || 5000;

// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
