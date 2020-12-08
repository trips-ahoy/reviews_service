const fs = require('fs');

const numListings = 1000000;
const iStart = 0;
const iEnd = 1000000;

// configured to generate x number of listings at a time, with ability to change starting/ending value of i 
// this way can generate 1 mil listings, seed to mongo, empty listings.json file, generate 1 mil more listings (with i start/end going up by 1 mil each time)
// hoping to do this to resolve timeout issue (tried to do all 10 mil at once at got killed: 9 error after generating 8 mil)
const writeDataToJSON = (numListings, iStart, iEnd, itemCreator, writeStream, encoding, done) => {
  let i = iStart;
  const oneTenth = numListings / 10;
  function writing() {
    let canWrite = true;
    do {
      i++;
      let item = itemCreator(i);
      if (i % oneTenth === 0) { // console.log progress every 10%
        console.log('another one tenth done, currently on: ', i);
      }
      if (i === iEnd) {
        writeStream.write(item, encoding, done);
      } else {
        writeStream.write(`${item},`, encoding);
      }
    } while (i < iEnd && canWrite);
    if (i < iEnd && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
}

module.exports = {
  writeDataToJSON,
  numListings,
  iStart,
  iEnd
}