import mongoose from "mongoose";

//connect the database
mongoose
  .connect("mongodb://localhost:27017/Drive")
  .then(() => console.log("database connect successfully"))
  .catch((err) => console.log("Error occur\n", err));


