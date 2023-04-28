import mongoose, { model } from "mongoose";

const FolderSchema = new mongoose.Schema({
    folderName:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
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