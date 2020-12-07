const fs = require('fs');
const faker = require('faker');
const path = require('path');

const { writeDataToCSV, numListings } = require('./pgGeneratorConfig.js');

const listingsFilePath = path.join(__dirname, 'pg_data', 'listings.csv');
const listingsStream = fs.createWriteStream(listingsFilePath);

const createListing = () => {
  const listing = faker.address.country();
  return `"${listing}"\n`;
};

listingsStream.write(`listing\n`, 'utf-8');
writeDataToCSV(numListings, createListing, listingsStream, 'utf-8', () => {
  listingsStream.end();
});