console.log('Hello');
var Cat = require('./Cart');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse = new Mouse('Micky', 1);
var dog = new Dog();
try {
  cat.eat(mouse);
  cat.eat(dog);
} catch (err) {
  console.log('Không thể ăn được');
}
console.log(cat);
