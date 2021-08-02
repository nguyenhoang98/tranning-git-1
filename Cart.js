const Mouse = require('./Mouse');
function Cat() {
  this.stomach = [];
}
Cat.prototype.eat = function (animal) {
  if (animal instanceof Mouse) {
    this.stomach.push(animal);
  } else {
    throw new Error('Không ăn được');
  }
};
Cat.prototype.greeting = function () {
  console.log('Cat :  Hello');
};
module.exports = Cat;
