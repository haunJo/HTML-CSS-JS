var x = 1;
var y = x;
x = 2;
console.log(y); // y == 1
// 참조 객체 값 변경
var data1 = [0, 1, 2];
// data2에는 data1의 값이 들어가는데, data1의 값은 [0, 1, 2]값이 들어가 있는 메모리 address
var data2 = data1;
data1[0] = 5;
console.log(data2);


const TAX = 1.0;
// 상수 변수에 값을 변경하면 error 발생
// TAX = 1.1;

const data = [1,2,3];
// console.log(data);
// 참조형 data type의 원소에 값을 변경해도 됨
data[1] = 10;
console.log(data);
// 하지만, 새로운 data 객체를 넣으면 error 발생
// data = [4,5,6];

// const : 변수명에 선언된 값을 고정시키고, 변경시킬 경우 에러 발생
// 기본형 : 값, => 값을 변경 에러
// 참조형 : 어드레스 => 어드레스를 변경시키지 않고, 객체의 개별 원소값 변경은 가능