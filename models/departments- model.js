const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    company:{type:String ,required:true},
    total:{type:Number,required:true},


})
module.exports = mongoose.model("department" , departmentSchema)