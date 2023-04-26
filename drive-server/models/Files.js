import mongoose from "mongoose";

const FilesSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  storage: {
    type: Buffer,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  uploadAt: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  path: {
    type: String,
  },
  parentId: {
    type: String,
    required: true,
  },
});

const Files = mongoose.model("Files", FilesSchema);

export default Files;
