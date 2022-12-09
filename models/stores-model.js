const mongoose = require('mongoose')
const schema = mongoose.Schema

const storesSchema = new schema({
    location:{type:String,required:true},
    storeName:{type:String,required:true},
    total:{type:Number,required:true}
})

module.exports = mongoose.model('store',storesSchema)
