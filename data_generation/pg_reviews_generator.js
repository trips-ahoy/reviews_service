const fs = require('fs');
const faker = require('faker');

const createReview = () => {
  const travelTypeOptions = ['families', 'couples', 'solo', 'business', 'friends'];
  const langOptions = [ 'Chinese', 'English', 'German', 'French', 'Spanish', 'Italian', 'Arabic', 'Japanese'];
  const seasonOptions = ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'];

  const listing_id = Math.floor((Math.random() * 10000000) + 1);
  const user_id = Math.floor((Math.random() * 1000) + 1);
  const title = faker.lorem.sentence();
  const full_text = faker.lorem.sentences();
  const date = faker.date.month() + ' 20' + Math.floor(Math.random() * 10 + 10)
  const season = seasonOptions[Math.floor(Math.random() * 4)];
  const travel_type = travelTypeOptions[Math.floor(Math.random() * 5)];
  const language = langOptions[Math.floor(Math.random() * 8)];
  const rating = Math.floor(Math.random() * 6);
  const randomPhoto1 = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const randomPhoto2 = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const randomPhoto3 = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const photo1 = `s3 link here ${randomPhoto1}`
  const photo2 = `s3 link here ${randomPhoto2}`
  const photo3 = `s3 link here ${randomPhoto3}`
  const helpful_count = Math.floor(Math.random() * 500);

  return `${listing_id},${user_id},${title},${full_text},${date},${season},${travel_type},${language},${rating},${photo1},${photo2},${photo3},${helpful_count}\n`;
};