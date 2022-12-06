const mongoose = require("mongoose")

const DBcoactionsString = process.env.CONNECTION_STRING;
mongoose.connect(DBcoactionsString ,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
.then(()=>{console.log("connection succeed...");})
.catch((error)=>{console.error("connection faild", error.message);})
module.exports = mongoose.connection;