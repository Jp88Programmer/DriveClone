import express from "express";
import SeverController from "../controller/server.controller.js";
import upload from "../middleware/upload.js";
import uploadGridfs from "../middleware/uploadGridfs.js";

const router = express.Router();

router.get("/get", SeverController.get);
router.get("/get-files", SeverController.getFiles);
router.post("/new-folder", SeverController.folderCreate);
router.post(
  "/upload-files",
  upload.array("files"),
  SeverController.uploadFiles
);

router.post(
  "/upload-files-gridfs",
  uploadGridfs.array("files"),
  SeverController.uploadFilesFromGridfs
);


router.post("/post:id", SeverController.post);

export default router;
