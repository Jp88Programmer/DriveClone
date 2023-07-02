import mongoose from "mongoose";
import Folders from "../models/Folder.js";
import path from "path";
import Grid from "gridfs-stream";
import fs from "fs";

const connection = mongoose.connection;
// Grid.mongo = mongoose.mongo;
// const gfs = Grid(mongoose.connection.db, mongoose.mongo);
// Grid.mongo = mongoose.mongo;
const db = mongoose.connection.db;
const mongo = mongoose.mongo;
var gfs = Grid(db,mongo);

async function folderCreate(req, res, next) {
  try {
    // console.log("folderCreate", req.body);
    const arr = await Folders.find();
    console.log("this is arr", arr);
    //to find out the search operation when same name as folder
    const body = {
      folderName: req.body.folderName,
      parentId: req.body.parentId,
    };
    arr.forEach((e) => {
      if (e.folderName === req.body?.folderName) {
        body.folderName = e.folderName + "(1)";
        return;
      }
    });
    const folder = new Folders(body);
    console.log(folder);
    const makeFolder = await folder.save();
    res.status(200).send("crated folder successfully");
    console.log(makeFolder);
  } catch (error) {
    next(error);
  }
}

async function uploadFiles(req, res, next) {
  console.log(req.files);
  res.status(200).send("you are in uploadfiles section");
}

async function getFiles(req, res, next) {
  // const collection = connection.db.collection("Drive");
  // const drive = mongoose.connection.collections;
  // console.log("collection",drive);
  // const data = await Drive.find();

  // console.log("this is the data", data);
  // res.send("data");
  // connection.once("open", async function () {
  //   const collection = connection.db.collection("Drive/uploadfiles");
  //   collection.find({}).toArray(function (err, data) {
  //     console.log("this is the data",data);
  //     res.send("hello world");
  //   });
  // });
  // function find(name, cb) {
  //   const collectionName = mongoose.connection.db.collection(name);
  //   console.log("this is the collection", collectionName);
  //   const data = collectionName.find({});
  //   console.log("this is the data", data);
  //   res.send("hello world");
  // }
  // find("uploads.files");
  // let gfg;

  // connection.once("open", function () {
  //   gfs = Grid(mongoose.connection.db, mongoose.mongo);
  // });
  var dirname = path.dirname(__dirname);
  var filename = req.file.filename;
  var pathName = req.file.path;
  var type = req.file.mimetype;
  var read_stream = fs.createReadStream(dirname + "/" + pathName);

  var writestream = gfs.createWriteStream({
    _id: filename,
    filename: req.file.originalname,
    mode: "w",
    content_type: type,
  });
  read_stream.pipe(writestream);

  writestream.on("close", function (file) {
    res.status(200).json({ filename: filename });
  });
}
async function uploadFilesFromGridfs(req, res, next) {
  console.log(req.files);
  res.status(200).send("you are in uploadfiles section");
}
async function get(req, res, next) {
  try {
    res.status(200).send("this is get method is called");
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    res.status(200).send("this updata is successful");
  } catch (error) {
    next(error);
  }
}

async function post(req, res, next) {
  console.log(req.params);
  res
    .status(200)
    .send("this is post method is called and its id " + req.params.id);
}
export default {
  get,
  update,
  post,
  folderCreate,
  uploadFiles,
  getFiles,
  uploadFilesFromGridfs,
};
