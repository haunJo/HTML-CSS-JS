// map의 key는 === 연산자로 비교됨
var m = new Map();
m.set('1', 'hoge');
console.log(m.get(1));


// NaN으로 key를 사용하는데 문제 없음
var m = new Map();
m.set(NaN, 'hoge');
console.log(m.get(NaN));


// 객체를 key로 사용할 경우 key를 먼저 객체 생성후 사용할 것
var m = new Map();
m.set({}, 'hoge');
console.log(m.get({})); // not working

var key = {};
var m = new Map();
m.set(key, 'hoge');
console.log(m.get(key)); // working