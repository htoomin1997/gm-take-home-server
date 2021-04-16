const mongoose = require("mongoose");
const result = new mongoose.Schema({
    date: Date,
    client: String,
    project: String,
    project_code: String,
    hours: Number,
    billable: Boolean,
    first_name: String,
    last_name: String,
    rate: Number,
    number: Number
})

module.exports = result;