const fs = require('fs');

const numListings = 10;

const writeDataToJSON = (numListings, itemCreator, writeStream, encoding, done) => {
  let i = 0;
  const oneTenth = numListings / 10;
  function writing() {
    let canWrite = true;
    do {
      i++;
      let item = itemCreator(i);
      if (i % oneTenth === 0) { // console.log progress every 10%
        console.log('another one tenth done, currently on: ', i);
      }
      if (i === numListings) {
        writeStream.write(item, encoding, done);
      } else {
        writeStream.write(`${item},`, encoding);
      }
    } while (i < numListings && canWrite);
    if (i < numListings && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
}

module.exports = {
  writeDataToJSON,
  numListings
}