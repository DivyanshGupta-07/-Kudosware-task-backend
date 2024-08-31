import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

import signupRouter from "./routes/signupRoute.js";

app.use("/api/v1", signupRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed !!", err);
  });
