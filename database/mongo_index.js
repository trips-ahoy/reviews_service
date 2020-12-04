const reviewSchema = new mongoose.Schema({
  _id: Number,
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