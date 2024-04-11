const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/testdb";

mongoose.connect(url)
.then(()=>{
    console.log("Connected to database!");
})
.catch((err) => {
    console.error("Cannot connect to database " +err);
})