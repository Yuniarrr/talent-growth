import express from "express";
import cors from "cors";
import mongo from "mongoose";
import router from "./route.js";
import * as env from "dotenv";

env.config();

const app = express();
const port = 3000;
const db_url = process.env.DATABASE_URL;

mongo.connect(db_url);

const database = mongo.connection;

database.on('error', (error) => {
    console.log(error);
});

database.on('connected', () => {
    console.log('Database Connected');
});

app.use(cors());

app.use("/", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});