// var과 마찬가지로 let도 모든 data type을 선언할 수 있음
let test= 10;
console.log(test);
test = 20.5;
console.log(test);
test = "this is test";
console.log(test);

let msg;
// let msg= 10;    // let은 동일 변수명으로 중복 선언을 불가

let x, y;

let greeting = '안녕하세요、자바스크립트！';

console.log(greeting);

// let greeting = "중복값 할당하면 에러 발생";

// let은 block scope을 지원
{
    let z = 2;
}
// console.log(z); // error 발생

// 원래 es5, javascript는 block scope을 지원 않함
{
    var a = 10; //global scope 처럼 인식
}
console.log(a);