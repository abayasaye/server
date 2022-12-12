const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    company:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    total:{type:Number,required:true}
})
module.exports = mongoose.model("info" , infoSchema)