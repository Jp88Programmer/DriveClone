import express from "express";
import path from "path";
import Route from "./routes/application.route.js";
import "./config/db.config.js";
import bodyParser from "body-parser";
import User from "./models/User.js";
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", Route);

app.listen(port, () => {
  console.log("listening on port at ", port);
});

