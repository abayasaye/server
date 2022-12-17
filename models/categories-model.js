const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    company:{type:String ,required:true},
    total:{type:Number,required:true}
})
module.exports = mongoose.model("category" , categoriesSchema)