const fs = require('fs');
const faker = require('faker');
const path = require('path');

const { writeDataToCSV, numListings, numUsers } = require('./pgGeneratorConfig.js');
const generateWeightedRandomNum = require('../generateWeightedRandomNum.js');

const reviewsFilePath = path.join(__dirname, 'pg_data', 'reviews.csv');
const reviewsStream = fs.createWriteStream(reviewsFilePath);

const createReview = (listingId) => {
  const travelTypeOptions = ['families', 'couples', 'solo', 'business', 'friends'];
  const langOptions = [ 'Chinese', 'English', 'German', 'French', 'Spanish', 'Italian', 'Arabic', 'Japanese'];
  const seasonOptions = ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'];

  const listing_id = listingId;
  const user_id = Math.floor((Math.random() * numUsers) + 1);
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
  const photo1 = `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomPhoto1}.jpg`;
  const photo2 = `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomPhoto2}.jpg`;
  const photo3 = `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomPhoto3}.jpg`;
  const helpful_count = Math.floor(Math.random() * 500);

  return `${listing_id},${user_id},"${title}","${full_text}",${date},${season},${travel_type},"${language}",${rating},${photo1},${photo2},${photo3},${helpful_count}\n`;
};

const createWeightedNumOfReviews = (listingId, min, middle, max) => {
  var reviews = '';
  
  var randomNum = generateWeightedRandomNum(min, middle, max);

  for (let i = 0; i < randomNum; i++) {
    reviews += createReview(listingId);
  }
  return reviews;
};

reviewsStream.write(`listing_id, user_id, title, full_text, date, season, travel_type, language, rating, photo1, photo2, photo3, helpful_count\n`, 'utf-8');

// for each listing, generate weighted random num of reviews, assigning each of those reviews the current listingId (index in do/while loop, + 1), and write to csv
writeDataToCSV(numListings, (i) => createWeightedNumOfReviews(i + 1, 5, 10, 25), reviewsStream, 'utf-8', () => {
  reviewsStream.end();
});