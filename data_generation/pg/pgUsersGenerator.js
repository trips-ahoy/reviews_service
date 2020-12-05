const fs = require('fs');
const faker = require('faker');
const path = require('path');

const writeDataToCSV = require('./pgWriteFunc');

const numUsers = 100;
const usersFilePath = path.join(__dirname, 'pg_data', 'users.csv');
const usersStream = fs.createWriteStream(usersFilePath);

const createUser = () => {
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  const username = name.split(' ').join('.');
  const address = faker.address.city() + ', ' + faker.address.country();
  const contributions = Math.floor(Math.random() * 500);
  const votes = Math.floor(Math.random() * 500);
  const randomAvatarNum = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const avatar = `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomAvatarNum}.jpg`;
  const followers = Math.floor(Math.random() * 2000);

  return `"${name}","${username}","${address}",${contributions},${votes},${avatar},${followers}\n`;
};

usersStream.write(`name, username, address, contributions, votes, avatar, followers\n`, 'utf-8');
writeDataToCSV(numUsers, createUser, usersStream, 'utf-8', () => {
  usersStream.end();
});

module.exports = {
  numUsers
}