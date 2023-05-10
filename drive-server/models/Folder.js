import mongoose, { model } from "mongoose";

const FolderSchema = new mongoose.Schema({
    folderName:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        default:0
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    parentId:{
        type:String,
        required:true
    }
})



const Folders = mongoose.model("Folders", FolderSchema);

export default Folders