// 객체 for in
var data = { apple:150, orange:100, banana: 120 };
console.log(typeof data);

// key에 'apple', 'orange', 'banana' 문자열로 넘어옴
// data['apple'] => 150, data.apple => 150
for (var key in data) {
  console.log(key + '=' + data[key]);
}

// array for in
var data = [ 'apple', 'orange', 'banana' ];
for (var key in data) {
  console.log(data[key]);
}

var data = [ 'apple', 'orange', 'banana' ];
Array.prototype.hoge = function () {} // [Function (anonymous)]
// for in 사용할 때 Array.prototype.hoge 함수 호출 => Array는 for ~ in 사용 권장 안함
for (var key in data) {
  console.log(data[key]); //apple orange banana
}


var data = [ 'apple', 'orange', 'banana' ];
// data.length를 사용하면 정상적으로 동작됨
for (var i = 0, len = data.length; i < len; i++) {
//for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}
