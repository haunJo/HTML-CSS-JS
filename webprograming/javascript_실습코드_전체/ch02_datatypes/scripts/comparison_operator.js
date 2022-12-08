// null과 undefined 비교
console.log(null == null);  // true
console.log(undefined == undefined);    // true
console.log(undefined == null); // true,  암기를 할 것

console.log(null === null); // true
console.log(undefined === undefined);   // true
console.log(undefined === null);    // false


// 객체간 비교 (==)
var data1 = ['JavaScript', 'Ajax', 'ASP.NET'];
var data2 = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data1 == data2); // false : 이유가 data1과 data2의 address가 틀리기 때문

// 등가 연산자 (==) : 비교하는 한쪽이 문자열, 한쪽이 숫자이면 => 문자열을 숫자로 변환
// 문자열을 숫자로 변환할 때, 숫자로 변환 가능한 부분까지만 숫자로 변환
// 모두 true
console.log('3.14E2' == 314);
console.log('0x10' == 16);
console.log('1' == 1);

// 등치 연산자 (===)
// 모두 false return
console.log('3.14E2' === 314);
console.log('0x10' === 16);
console.log('1' === 1);

console.log('< comparator');

console.log(2 < 12);
// 숫자와 string을 비교할 때 string을 숫자로 변환, 
// "John"은 숫자로 변환하면 NaN가 되고, 이 것은 무조건 false를 return함
console.log(2 < "12");
console.log(2 < "John");
console.log(2 > "John");
console.log(2 == "John");
// string들로 비교하면, string의 첫번째 문자값(ascii code값)이 큰 것을 기준으로 비교
console.log("2" < "12");
console.log("2" > "12");
console.log("2" == "12");

// 3항 연산자 (? :)
var x = 80;
console.log((x >= 70) ? '합격' : '불합격');
