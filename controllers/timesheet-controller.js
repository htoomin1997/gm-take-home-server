const mongoose = require("mongoose")
const Timesheet = mongoose.model("Timesheet")
const fs = require("fs").promises;
const parse = require("csv-parse/lib/sync");

//Uses insert many because of the size of the records that are being inserted
const convertCSV = async () => {
    try{
        const result = await fs.readFile(__dirname + "/sample_data.csv")
        const records = parse(result, {columns: true});

        //Remove top row
        records.splice(0,1);
        const recordArr = [];

        for (const record of records){
            let obj = {
                date: record["Date"],
                client: record["Client"],
                project: record["Project"],
                project_code: record["Project Code"],
                hours: record["Hours"],
                billable: record["Billable?"] === "Yes" ? true: false,
                first_name: record["First Name"],
                last_name: record["Last Name"],
                rate: record["Billable Rate"],
            }
            recordArr.push(obj);
        }
        await Timesheet.insertMany(recordArr);
        return true;
    } catch(err) {
        console.log(err)
        return false;
    }
}

//Gets every record for display on the front end
const getRecords = async () => {
    try {
        const records = await Timesheet.find();
        return records;
    } catch(err) {
        return err;
    }
    
}

//Single insert of a record
const insertRecord = async (postedRecord) => {
    try {
        const newEntry = new Timesheet(postedRecord);
        await newEntry.save()
    } catch(err) {

    }
}

module.exports = {
    convertCSV: convertCSV,
    getRecords: getRecords,
    insertRecord: insertRecord
}