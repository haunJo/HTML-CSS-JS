var x = 1;
var y = 2;

console.log(x === 1 && y === 1);    // false
console.log(x === 1 || y === 1);    // true


var x = 1;

// A && B => A가 true이면 B를 강제 실행
if (x === 1) { console.log('안녕하세요'); }
x ===1 && console.log('안녕하세요');

// A || B => A가 false이면 B를 강제 실행
var msg = '';   // empty string '' => false
// msg = '이미 메세지가 있습니다';
// msg값을 초기화할 때, 많이 사용하는 방식
msg = msg || '안녕하세요, 자바스크립트!';
console.log(msg);
