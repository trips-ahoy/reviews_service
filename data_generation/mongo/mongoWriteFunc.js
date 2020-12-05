const fs = require('fs');
const path = require('path');
const faker = require('faker');

const numListings = 10;
const listingsFilePath = path.join(__dirname, 'mongo_data', 'listings.json');
const listingsStream = fs.createWriteStream(listingsFilePath);

const createUser = () => {
  const randomAvatarNum = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const name = faker.name.firstName() + ' ' + faker.name.lastName();

  return {
    // id?
    name: name,
    username: name.split(' ').join('.'),
    address: faker.address.city() + ', ' + faker.address.country(),
    contributions: Math.floor(Math.random() * 500),
    votes: Math.floor(Math.random() * 500),
    avatar: `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomAvatarNum}.jpg`,
    followers: Math.floor(Math.random() * 2000)
  }
};

const createReview = (i) => {
  const travelTypeOptions = ['families', 'couples', 'solo', 'business', 'friends'];
  const langOptions = [ 'Chinese', 'English', 'German', 'French', 'Spanish', 'Italian', 'Arabic', 'Japanese'];
  const seasonOptions = ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'];

  const randomPhoto1 = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const randomPhoto2 = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);
  const randomPhoto3 = Math.floor((Math.random() * 1000) + 1).toString().padStart(4, 0);

  return {
    // listing_id and user_id?
    id: i,
    title: faker.lorem.sentence(),
    full_text: faker.lorem.sentences(),
    date: faker.date.month() + ' 20' + Math.floor(Math.random() * 10 + 10),
    season: seasonOptions[Math.floor(Math.random() * 4)],
    travel_type: travelTypeOptions[Math.floor(Math.random() * 5)],
    language: langOptions[Math.floor(Math.random() * 8)],
    rating: Math.floor(Math.random() * 6),
    photo1: `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomPhoto1}.jpg`,
    photo2: `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomPhoto2}.jpg`,
    photo3: `https://sdc-reviews-images.s3-us-west-2.amazonaws.com/${randomPhoto3}.jpg`,
    helpful_count: Math.floor(Math.random() * 500),
    user: createUser()
  }
};

const createXReviews = (x) => {
  const reviewsArray = [];
  for (let i = 1; i <= x; i++) {
    const review = createReview(i);
    reviewsArray.push(review);
  }
  return reviewsArray;
};

const createListing = (i) => {
  const listing = JSON.stringify({
    listing_id: i,
    listing: faker.address.country(),
    reviews: createXReviews(5) // will make a variable num of reviews. doesn't this mean amount of data will be different for mongo vs. pg? as each review will have a user (vs. separate users table?)
  });
  return listing;
};

const writeDataToJSON = (numListings, writeStream, encoding, done) => {
  let i = 0;
  const oneTenth = numListings / 10;
  function writing() {
    let canWrite = true;
    do {
      i++;
      let item = createListing(i);
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

listingsStream.write('[', 'utf-8');
writeDataToJSON(numListings, listingsStream, 'utf-8', () => {
  listingsStream.write(']', 'utf-8');
  listingsStream.end();
});