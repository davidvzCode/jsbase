const cities = ["Ciudad de Mexico", "Lima", "Ecuador"];

const randomString = () => {
  const strings = cities[Math.floor(Math.random() * cities.length)];
  return strings;
};

module.exports = randomString;
