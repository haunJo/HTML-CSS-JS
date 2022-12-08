// global object method : isNaN
// 'hoge'를 숫자형으로 변환후 NaN인지 판단
console.log(isNaN('hoge'));         // true
// Number.isNaN 인자가 NaN인지 판단 ('hoge'는 NaN이 아님)
console.log(Number.isNaN('hoge'));  // false

// encodeURI, encodeURIComponent method
var str = '!"#$%&()+-*/@~_|;:,.';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

// eval method
// console.log("eval함수") => javascript code
var str = 'console.log("eval함수")';
eval(str);


var obj = { hoge: 1, foo: 2 };
var prop = 'hoge';
eval('console.log(obj.'+ prop + ')');
// 'console.log(obj[prop])';

/*
eval('var data = { "hoge": 1, "foo": 2 }');
console.log(data.hoge);
*/

// json parse => 객체를 javascript object변환
var data = JSON.parse('{ "hoge": 1, "foo": 2 }');
console.log(data.hoge);