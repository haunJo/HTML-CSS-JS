var data = [ 'apple', 'orange', 'banana' ];
Array.prototype.hoge = function () {};
// for key in data
for (var value of data) {
  console.log(value);
}

let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"