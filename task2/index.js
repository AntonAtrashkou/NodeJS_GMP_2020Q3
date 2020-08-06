const fs = require("fs");
const { pipeline } = require("stream");
const csv = require("csvtojson");
const chalk = require("chalk");

const NEW_FILE_NAME = "test2.txt";
const CSV_FILE_PATH = "./csv/task2.csv";
const NEW_FILE_PATH = `./task2/${NEW_FILE_NAME}`;

const csvToJSONStream = csv();
const readCsvStream = fs.createReadStream(CSV_FILE_PATH);
const writeTxtStream = fs.createWriteStream(NEW_FILE_PATH);

pipeline(readCsvStream, csvToJSONStream, writeTxtStream, (err) => {
  if (err) {
    console.error(chalk.red("ERROR:", err));
    return;
  } else {
    console.log(chalk.green("Task 2 finished"));
  }
});
