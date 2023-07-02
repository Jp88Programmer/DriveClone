import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("this is the storage destination")
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

export default upload;