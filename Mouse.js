function Mouse(name, age) {
  this.name = name;
  this.age = age;
}
Mouse.prototype.run = function () {
  console.log('Running');
};
Mouse.prototype.sleep = function () {
  console.log('Sleeping...');
};
module.exports = Mouse;
