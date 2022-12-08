// 변수 선언만 하고 초기화 하지 않으면 변수에 undefined값이 들어감
var x;
console.log(x);
var obj = { a:12345 };
// obj의 b라는 key가 없는데 사용 => Java, C++에서는 syntax error
console.log(obj.b); // undefined


// null : 비어 있다라는 의미, 특히 object(객체) 초기화할 때 사용

// number 변수 초기화
var data1 = 0;

// string 변수 초기화
var data2 = "";

// boolean 변수 초기화
var data3 = false;

// object 변수 초기화
var data4 = null;
