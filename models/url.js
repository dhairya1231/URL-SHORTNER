const mongoose=require("mongoose");

const URLINFO=new mongoose.Schema({
    realid: {
        required:true,
        type:String,
        unique:true},
        shortid: {
            required:true,
            type:String,
            unique:true},

        });
        const URL=mongoose.model("URL",URLINFO);
        module.exports=URL;

    