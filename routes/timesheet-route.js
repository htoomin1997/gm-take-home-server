const { response } = require("express");
const express = require("express");
const router = express.Router();
const timesheet = require("../controllers/timesheet-controller.js")
const responseWrapper = require("./responseWrapper");

//Gets all of the timesheet data from the timesheet table
router.get("/records", async (req,res) => {
    try {
        timesheet.getRecords().then((payload) => {
            res.send(responseWrapper.successWrapper(payload))
        }); 
    } catch (err) {
        res.send(responseWrapper.serverErrorWrapper(err));
    }
});

//Assuming that the data will be passed in params
//Also assuming that the user is following the parameters set forth by the schema
//Creates a single record based on a request
router.post("/create-record", async (req, res) => {
    try {
        console.log(req.query);
        await timesheet.insertRecord(req.query);
        res.send(responseWrapper.successWrapper("Item inserted successfully."))
    } catch (err) {
        res.send(responseWrapper.serverErrorWrapper(payload))
    }
});


//Creates records based off of the sample_data.csv which is the csv provided
//For some reason, I couldn't path to a file outside of the current folder, which is why the csv is in controllers... 
router.get("/add-information", async (req,res) => {
    try {
        timesheet.convertCSV().then((payload) => {
            if (payload === true){
                const temp = responseWrapper.successWrapper(payload);
                res.send(temp);
            } else {
                throw "Something went wrong";
            }
        }); 
    } catch (err) {
        res.send(responseWrapper.serverErrorWrapper(err));
    }
})

module.exports = router;