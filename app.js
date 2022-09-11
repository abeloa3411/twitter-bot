import express from "express";
import tweet from "./tweet.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

tweet();
