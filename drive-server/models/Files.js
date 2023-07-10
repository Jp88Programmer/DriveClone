import mongoose from "mongoose";

// const FilesSchema = new mongoose.Schema({
//   fileName: {
//     type: String,
//     required: true,
//   },
//   storage: {
//     type: Buffer,
//     required: true,
//   },
//   size: {
//     type: Number,
//     required: true,
//   },
//   fileType: {
//     type: String,
//     required: true,
//   },
//   uploadAt: {
//     type: Date,
//     default: Date.now,
//   },
//   deleted: {
//     type: Boolean,
//     default: false,
//   },
//   path: {
//     type: String,
//   },
//   parentId: {
//     type: String,
//     required: true,
//   },
// });
const fileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  metadata: mongoose.Schema.Types.Mixed,
});

const Files = mongoose.model("Files", fileSchema);

// Add schema to fetch the document
const gridFilesSchema = new mongoose.Schema(
  {},
  {
    strict: false,
  }
);
const gridChunksSchema = new mongoose.Schema(
  {},
  {
    strict: false,
  }
);

const gridFiles = mongoose.model("Grid", gridFilesSchema, "uploads.files");
const gridChunks = mongoose.model("GridChunks", gridChunksSchema, "uploads.chunks");

export default Files;
export { gridFiles, gridChunks };
