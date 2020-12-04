const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripreviews', {userNewUrlParser: true});

const mongoConnect = mongoose.connection;
mongoConnect.on('error', console.error.bind(console, 'connection error:'));
mongoConnect.once('open', () => console.log('connected to mongoose'));

const listingSchema = new mongoose.Schema({
  listing_id: Number,
  listing: String,
  reviews: [
    {
      id: Number,
      title: String,
      full_text: String,
      photo1: String,
      photo2: String,
      photo3: String,
      helpful_count: Number,
      rating: Number,
      travel_type: String,
      season: String,
      date: String,
      language: String,
      listing_id: Number,
      user_id: Number, // how to query by user_id
      user: {
        id: Number,
        username: String,
        contributions: Number,
        votes: Number,
        avatar: String,
        followers: Number,
        name: String,
        address: String
      }
    }
  ]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = {
  mongoConnect: mongoConnect,
  model: Listing
};