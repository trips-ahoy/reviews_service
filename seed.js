const db = require('./database/index.js');
const Promise = require('bluebird');
const faker = require('faker');

//create an array of random size, with random user_id's
var randomUsers = () => {
  var arr = new Array(Math.floor(Math.random() * 15));

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 99 + 1);
  }
  return arr.join(' ')
}


var createListings = () => {
  var listings = [];

  return new Promise((resolve, reject) => {

    for (let i = 1; i < 102; i++) {
      const listing = {
        listing: faker.lorem.sentence()
      }
      listings.push(listing);
    }
    resolve(listings)
  })

}

var addListings= (listings) => {


  return new Promise((resolve, reject) => {
    for (let i = 1; i < listings.length; i++) {

      var queryArg = [listings[i].listing];

      var query = "INSERT INTO listings (listing) VALUES (?)";

      db.query(query, queryArg, (err) => {
        if (err) {
          reject(err)
        }
      })
    }
    resolve(listings)
  })

}




var createUsers = () => {
  var users = [];
  return new Promise((resolve, reject) => {

    for (let i = 1; i < 101; i++) {
      var name = faker.name.firstName() + ' ' + faker.name.lastName()
      const user = {
        id: i,
        name: name,
        username: name.split(' ').join('.'),
        address: faker.address.city() + ", " + faker.address.country(),
        contributions: Math.floor(Math.random() * 500),
        votes: Math.floor(Math.random() * 500),
        avatar: '/images/avatar'+ Math.floor(Math.random() * 5 + 1 )+'.jpg',
        followers: Math.floor(Math.random() * 2000)
      }
      users.push(user);
    }
    resolve(users)

  })


}


var addUsers= (users) => {

    return new Promise((resolve, reject) => {
      for (let i = 0; i < users.length - 1; i++) {

        var queryArg = [users[i].id, users[i].name, users[i].username, users[i].address, users[i].contributions, users[i].votes, users[i].avatar, users[i].followers];

        var query = "INSERT INTO users (id, name, username, address, contributions, votes, avatar, followers) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        db.query(query, queryArg, (err) => {
          if (err) {
            reject(err)
          }
        })
      }
      resolve(users)
    })

}



var createReviews = (listings) => {

  var reviews = [];
  return new Promise((resolve, reject) => {

    var travel_type = ['families', 'couples', 'solo', 'business', 'friends'];
    var languages = [ 'Chinese', 'English', 'German', 'French', 'Spanish', 'Italian', 'Arabic', 'Japanese'];
    var seasons = ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb']


    for (let i = 1; i < listings.length; i++) {
      //50 reviews per listing
      for (let j = 0; j < 50; j++) {
        const review = {
          listing_id: i,
          user_id:  Math.floor(Math.random() * 99 + 1),
          title: faker.lorem.sentence(),
          full_text: faker.lorem.sentences(),
          date: faker.date.month() + ' 20' + Math.floor(Math.random() * 10 + 10),
          season: seasons[Math.floor(Math.random() * 4)],
          travel_type: travel_type[Math.floor(Math.random() * 5)],
          language: languages[Math.floor(Math.random() * 8)],
          rating: Math.floor(Math.random() * 6),
          photo1: '/images/nature'+ Math.floor(Math.random() * 3 + 1)+'.jpg',
          photo2: '/images/nature'+ Math.floor(Math.random() * 3 + 3)+'.jpg',
          photo3: '/images/nature'+ Math.floor(Math.random() * 3 + 7)+'.jpg',
          helpful: randomUsers()
        }
      reviews.push(review)

      }


    }

    resolve(reviews);
  })
}


var addReviews = (reviews) => {
  return new Promise((resolve, reject) => {

    for (let i = 0; i < reviews.length; i++) {

      var queryArg = [reviews[i].listing_id, reviews[i].user_id, reviews[i].title, reviews[i].full_text, reviews[i].date, reviews[i].season, reviews[i].travel_type, reviews[i].language, reviews[i].rating, reviews[i].photo1 , reviews[i].photo2 ,reviews[i].photo3 ,reviews[i].helpful]

      var query = "INSERT INTO reviews (listing_id, user_id, title, full_text, date, season, travel_type, language, rating, photo1, photo2, photo3, helpful) VALUES ('?', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      db.query(query, queryArg, (err) => {
        if (err) {
          reject(err)
        }
      })




    }
    resolve()
  })
}




createUsers()
  .then ((users) => {
    return addUsers(users)
  })


createListings()
  .then((listings) => {
    return addListings(listings)
  })
  .then( (listings) => {
    ///console.log('users added', users)
    return createReviews(listings)
  })
  .then ( (reviews) => {
    ///console.log( reviews,'users reviews')
    addReviews(reviews)
  })
  .then(() => {
    console.log('data loaded successfully')
  })
  .catch( (err) => {
    console.log(err)
  })


