const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected to MONGODB");
}).catch((err)=>{
    console.log("connection error");
})
const db = mongoose.connection;
module.exports = db;