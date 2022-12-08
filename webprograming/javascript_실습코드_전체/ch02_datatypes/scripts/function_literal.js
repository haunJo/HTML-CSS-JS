// 변수 선언할 때 정수값, 실수값 등을 초기화 하는 것과 같이 
// 변수 선언할 때 함수를 변수 초기값으로 넣는 것이 가능
var myFunc = function() {
  console.log('function literal execution');
};
var x = 10;

// () => 함수를 실행할 경우 반드시 사용
myFunc();