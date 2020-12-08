const fs = require('fs');

const numListings = 10000000;
const numUsers = 1000000;

const writeDataToCSV = (numLines, itemCreator, writeStream, encoding, done) => {
  let i = numLines;
  const oneTenth = numLines / 10;
  function writing() {
    let canWrite = true;
    do {
      i--;
      let item = itemCreator(i);
      if (i % oneTenth === 0) { // console.log progress every 10%
        console.log('another one tenth done, currently on: ', i);
      }
      if (i === 0) {
        writeStream.write(item, encoding, done);
      } else {
        writeStream.write(item, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
}

module.exports = {
  writeDataToCSV,
  numListings,
  numUsers
}