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

export default Files;
