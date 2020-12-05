const fs = require('fs');
const faker = require('faker');
const path = require('path');
const argv = require('yargs').argv;

const writeDataToCSV = require('./pgWriteFunc');

const numListings = argv.lines || 100;
const listingsFilePath = argv.output || path.join(__dirname, 'pg_data', 'listings.csv');
const listingsStream = fs.createWriteStream(listingsFilePath);

const createListing = () => {
  const listing = faker.address.country();
  return `${listing}\n`;
};

listingsStream.write(`listing\n`, 'utf-8');
writeDataToCSV(numListings, createListing, listingsStream, 'utf-8', () => {
  listingsStream.end();
});