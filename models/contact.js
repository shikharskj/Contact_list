const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const Contact_collection = mongoose.model("Contact_collection",contactSchema);

module.exports = Contact_collection;