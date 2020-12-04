const fs = require('fs');
const axios = require('axios');
const path = require('path');

const url = 'https://loremflickr.com/320/240/travel';

const downloadImage = (fileName) => {
  const filePath = path.join(__dirname, 'images', fileName + '.jpg');
  axios.get(url, {responseType: 'stream'})
    .then(({ data }) => {
      return data.pipe(fs.createWriteStream(filePath));
    })
    .catch(err => console.log(err));
};

const downloadXImages = (x) => {
  let timer = 0;
  for (let i = 1; i <= x; i++) {
    let fileName = i.toString().padStart(4, 0);
    setTimeout(() => downloadImage(fileName), timer);
    timer += 2000;
  }
}

downloadXImages(1000);