import mongoose from "mongoose";
import Folders from "../models/Folder.js";
import path from "path";
import Grid from "gridfs-stream";
import fs from "fs";
import { gridFiles, gridChunks } from "../models/Files.js";
const connection = mongoose.connection;
let gfs;
connection.once("open", () => {
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("uploads");
});

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
  // add fetch the document data which on chnunk base to convert into base64 contenet
  // 
  const gridFilesArr = await gridFiles.find();
  let Files = [];
  gridFilesArr.forEach(async (file) => {
    const readStream = gridChunks
      .find({
        files_id: file._id,
      })
      .cursor();
    let bufs;
    readStream
      .eachAsync(async (doc) => {
        // Process each document
        // console.log(typeof doc);
        // bufs.push(doc.join(""));
        // bufs += doc.data.toString()
        bufs = doc.data.toString("base64");
        // bufs.push(doc)
      })
      .then(() => {
        // Stream ended
        console.log("Stream ended");
        // console.log("this is ", bufs);
        // var fbuf = Buffer.concat(bufs);
        // var File = fbuf.toString("base64");
        Files.push(bufs);
        // return res.send(bufs);
      })
      .catch((err) => {
        console.error("Error reading stream:", err);
        res.send(err);
      });
  });
  console.log(Files);
  if (Files.length > 0) {
    res.send(Files);
  } else {
    res.send("hello world");
  }
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
