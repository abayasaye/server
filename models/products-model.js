const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    company:{type:String},
    quantity:{type:Number},
    total:{type:Number,required:true}
})
module.exports = mongoose.model("product" , productsSchema)