import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";
import crypto from "crypto";
import path from "path";


// create storage engine
const storage = new GridFsStorage({
  url: "mongodb://0.0.0.0:27017/Drive",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        console.log("hello we move here");
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const uploadGridfs = multer({ storage });

export default uploadGridfs;
