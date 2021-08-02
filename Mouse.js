function Mouse(name, age) {
  this.name = name;
  this.age = age;
}
Mouse.prototype.run = function () {
  console.log('Running');
};
module.exports = Mouse;
