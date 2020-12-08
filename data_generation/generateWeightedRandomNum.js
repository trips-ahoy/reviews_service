const generateWeightedRandomNum = (min, middle, max) => { // 5, 10, 25
  var randomize = Math.floor(Math.random() * 5 + 1);

  // 20% of the time, generate a random high num
  if (randomize === 5) {
    return Math.floor(Math.random() * (max - middle) + middle);
  }
  
  // 80% of the time, generate a random low num
  return Math.floor(Math.random() * (middle - min) + min);
};

module.exports = generateWeightedRandomNum;