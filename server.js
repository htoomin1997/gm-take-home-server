const express = require("express");
const cors = require("cors");
const server = express();
const mongoose = require("mongoose");

//Model Imports
const Timesheet = require("./models/Timesheet");
mongoose.model("Timesheet", Timesheet);

mongoose.connect("mongodb+srv://root-user:giantmachinespassword@cluster0.1vsjn.mongodb.net/giant-machines?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

server.use(cors());

const timesheetRouter = require("./routes/timesheet-route");
server.use("/timesheet", timesheetRouter);

server.set("port", 8080);

const serve = server.listen(server.get("port"), function () {
    console.log("Express server listening on port: " + serve.address().port)
});