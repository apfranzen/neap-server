var faker = require('faker');

exports.seed = function(knex, Promise) {
  let numberOfArrays = new Array(10);
  let arrayOfCoffee = Array.from(numberOfArrays).map(() => {
    return generateCoffee(knex);
  });
  return Promise.all(arrayOfCoffee);
};

function generateCoffee (knex) {
  return knex('coffee')
  .insert({
    name: faker.commerce.productName(),
    roaster: faker.company.companyName(),
    origin: faker.address.country(),
    roast: faker.commerce.color(),
    caffeine: faker.random.number({
      'min': 1,
      'max': 10
    }),
    decaf: faker.random.boolean(),
    price: faker.random.number({
      'min': 1,
      'max': 1000
    }),
    quantity: faker.random.number({
      'min': 1,
      'max': 100
    })
  });
}
