const faker = require("faker");
const { v4:uuidv4 } = require('uuid');

module.exports = function generateGuests() {
  const recipes = [];
  for (let id = 0; id < 50; id += 1) {
    recipes.push({
      id: uuidv4(),
      recipeName: faker.name.recipeName(),
      description: faker.name.lastName(),
    });
  }
  return { recipes };
};
