import mongoose from "mongoose";

const sharlinkSchema = new mongoose.Schema({
    id : {
        type:String,
        required:true
    },
    isOwner:{
        type:Boolean,
        required:true
    },

})

const Sharlink = mongoose.model("Sharlink", sharlinkSchema);

export default Sharlink;