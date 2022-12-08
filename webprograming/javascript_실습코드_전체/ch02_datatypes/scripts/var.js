// Javascript에서는 정수, 실수, string, array등 모든 data type의 변수를 선언할 때
// var keyword 사용
// javascript에서는 변수가 선언된 때, 초기값을 보고 어떤 data type이라는 것을 유추
var a = 10;     // java => int a = 10;
var b = 32.5;   // java => float b = 32.5;
var c = [1,2,3];    // java => int[] c = [1,2,3];

// msg변수를 var로 선언하지 않고 사용해도 error 발생 않함 
// => javascript가 암묵적으로 변수에 처음 값이 대입되는 시점에 var 변수 선언함
// => 변수선언 필수 아님
msg = '안녕하세요、JavaScript！';
console.log(msg);

var x = 10;
console.log(x);

// x를 여러번 var로 선언해도 error 발생 않함
var x = 20;
console.log(x);

// number data 타입에서 문자열(string) data type으로 변경도 가능
x = "data type 변경도 가능";
console.log(x);

// 변수만 선언하고 값을 할당않하면 y값에 undefined 로 들어감
var y;
console.log(y);

