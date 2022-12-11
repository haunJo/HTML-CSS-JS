// NaN (Not a Number)
// NaN값을 검출할려면, Number.isNaN을 사용할 것
console.log(Number.NaN === Number.NaN); // false NaN은 자신 자신과도 같지 않음

// SAFE INTEGER 사용 예
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);   // 제대로 정확한 값이 나오지 않음

// 숫자형식을 변환하는 메소드
var num1 = 255;
console.log(num1.toString(16));
console.log(num1.toString(8));

var num2 = 123.45678;
console.log(num2.toExponential(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(6));


// 문자열을 숫자로 변환하는 메소드
var n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

var d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));

var h = '0x10';
console.log(Number(h));
console.log(Number.parseFloat(h));
console.log(Number.parseInt(h));

var b = '0b11';
console.log(Number(b));
console.log(Number.parseFloat(b));
console.log(Number.parseInt(b));

var e = '1.01e+2';
console.log(Number(e));
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e));


// +, - 산술 연산자에 의한 문자열 또는 숫자로 변환
console.log(typeof(123 + ''));  // 숫자가 문자열로 변환
console.log(typeof('123' - 0)); // 문자열이 숫자로 변환

// 숫자를 논리형으로 변환
var num = 123;
console.log(!!num);