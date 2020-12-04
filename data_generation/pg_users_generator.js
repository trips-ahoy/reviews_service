const fs = require('fs');
const faker = require('faker');

const createUser = () => {
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  const username = name.split(' ').join('.');
  const address = faker.address.city() + ', ' + faker.address.country();
  const contributions = Math.floor(Math.random() * 500);
  const votes = Math.floor(Math.random() * 500);
  const followers = Math.floor(Math.random() * 2000);
  const randomAvatarNum = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const avatar = `s3 link here ${randomAvatarNum}`

  return `${name},${username},${address},${contributions},${votes},${followers},${avatar}\n`;
};