const fs = require('fs');
const faker = require('faker');

const randomPhotoNumber = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);

const createUser = () => {
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  const username = name.split(' ').join('.');
  const address = faker.address.city() + ', ' + faker.address.country();
  const contributions = Math.floor(Math.random() * 500);
  const votes = Math.floor(Math.random() * 500);
  const followers = Math.floor(Math.random() * 2000);
  const avatar = `s3 link here ${randomPhotoNumber}`

  return `${name},${username},${address},${contributions},${votes},${followers},${avatar}\n`;
};

const createReview = () => {
  const travelTypeOptions = ['families', 'couples', 'solo', 'business', 'friends'];
  const langOptions = [ 'Chinese', 'English', 'German', 'French', 'Spanish', 'Italian', 'Arabic', 'Japanese'];
  const seasonOptions = ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'];

  const listing_id = Math.floor((Math.random() * NUMHERE) + 1);
  const user_id = Math.floor((Math.random() * 1000) + 1);
  const title = faker.lorem.sentence();
  const full_text = faker.lorem.sentences();
  const date = faker.date.month() + ' 20' + Math.floor(Math.random() * 10 + 10)
  const season = seasonOptions[Math.floor(Math.random() * 4)];
  const travel_type = travelTypeOptions[Math.floor(Math.random() * 5)];
  const language = langOptions[Math.floor(Math.random() * 8)];
  const rating = Math.floor(Math.random() * 6);
  const photo1 = `s3 link here ${randomPhotoNumber}`
  const photo2 = `s3 link here ${randomPhotoNumber}`
  const photo3 = `s3 link here ${randomPhotoNumber}`
  const helpful_count = Math.floor(Math.random() * 500);

  return `${listing_id},${user_id},${title},${full_text},${date},${season},${travel_type},${language},${rating},${photo1},${photo2},${photo3},${helpful_count}\n`;
};