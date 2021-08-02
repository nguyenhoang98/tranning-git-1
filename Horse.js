function Horse(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}
Horse.prototype.run = function () {
  console.log('Running');
};
Horse.prototype.jump = function () {
  console.log('Jumping');
};
module.exports = Horse;
