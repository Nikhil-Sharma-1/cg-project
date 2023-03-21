const mongoose = require("mongoose");

const DB = "mongodb+srv://sharmanikhil67696:Nick_official@cluster0.mjqij8p.mongodb.net/cg-data?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err.message);
});