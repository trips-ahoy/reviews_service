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
        avatar: faker.internet.avatar(),
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



var createReviews = (users) => {

  var reviews = [];
  return new Promise((resolve, reject) => {

    var travel_type = ['families', 'couples', 'solo', 'business', 'friends'];
    var languages = ['Russian', 'English', 'German', 'Chinese', 'French', 'Spanish', 'Italian', 'Polish', 'Swedish', 'Arabic', 'Japanese','Hindi', 'Bengali', 'Indonesian', 'Turkish'];

    for (let i = 0; i < users.length; i++) {

      const review = {
        user_id:  Math.floor(Math.random() * 99 + 1),
        title: faker.lorem.sentence(),
        full_text: faker.lorem.sentences(),
        date: faker.date.recent().toString(),
        travel_type: travel_type[Math.floor(Math.random() * 5)],
        language: languages[Math.floor(Math.random() * 15)],
        rating: Math.floor(Math.random() * 6),
        photo: '../public/photo1.jpeg',
        helpful: randomUsers()
      }
      reviews.push(review)
    }

    resolve(reviews);
  })
}


var addReviews = (reviews) => {
  return new Promise((resolve, reject) => {

    for (let i = 0; i < reviews.length; i++) {

      var queryArg = [reviews[i].user_id, reviews[i].title, reviews[i].full_text, reviews[i].date, reviews[i].travel_type, reviews[i].language, reviews[i].rating, reviews[i].photo , reviews[i].helpful]

      var query = "INSERT INTO reviews (user_id, title, full_text, date, travel_type, language, rating, photo, helpful) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

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
  .then( (users) => {
    return createReviews(users)
  })
  .then ( (reviews) => {
    addReviews(reviews)
  })
  .then(() => {
    console.log('data loaded successfully')
  })
  .catch( (err) => {
    console.log(err)
  })


