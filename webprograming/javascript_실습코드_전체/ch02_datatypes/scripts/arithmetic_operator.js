console.log(10 + 1);
// javascript : 문자열 + 숫자 => 연산 가능(숫자를 문자열로 자동형변황), 
// '10' + '1' => '101' : Javascript에서는 문자열에 + 연산 가능
console.log('10'+ 1);
var today = new Date(); // today return값이 문자열
console.log(1234 + today);

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);

var x = 5 + 5;
console.log(x);
// 두번째 operand 숫자 5가 문자열 "5"로 data type 자동 변경(conversion)됨
var y = "5" + 5;
console.log(y);
var z = "Hello" + 5;
console.log(z);

x = 5 ** 2;
console.log(x);

// increment ++
var x = 3;
var y = x++;
console.log(x);
console.log(y);
var x = 3;
var y = ++x;
console.log(x);
console.log(y);


// 0.2 * 3을 연산하면, 오차 때문에 정확히 0.6이 나오지 않음
console.log(0.2 * 3);
console.log(0.2 * 3 === 0.6);

// 소숫점 연산 가이드
// => 소숫점 값을 일단 정수로 바꾼뒤에 연산을 행하고, 다시 소수로 변환
console.log(((0.2 * 10) * 3) / 10);
console.log((0.2 * 10) * 3 === 0.6 * 10);