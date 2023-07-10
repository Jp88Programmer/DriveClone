import mongoose from "mongoose";
const url = "mongodb://localhost:27017/Drive";
const connect = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;

connect.once("open", () => {
  // initialize stream
  console.log("database connect successfully")
  gfs = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "uploads",
  });
});

export default connect;
export { gfs };
