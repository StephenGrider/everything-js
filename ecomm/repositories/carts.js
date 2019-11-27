const Repository = require('./repository');

class CartsRepository extends Repository {}

module.exports = new CartsRepository('carts.json');
