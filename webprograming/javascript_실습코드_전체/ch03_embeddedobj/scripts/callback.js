// foreach
var data = [2, 3, 4, 5];
// value : array의 원소 값, index : 해당 원소의 index, array : 전체 array 객체
var callback = function(value, index, array) {
  console.log(value * value);
};
// 배열 원소 2, 3, 4, 5에 대해서 callback함수를 반복 실행
data.forEach(callback);


// map
var data = [2, 3, 4, 5];
var result = data.map(function(value, index, array) {
  return value * value;
});
console.log(result);


// some : 순회 중 하나라도 만족하는 값이 나오면 true 반환
var data = [4, 9, 16, 25];
var result = data.some(function(value, index, array) {
  return value % 3 === 0;
});

if (result) {
  console.log('3의 배수가 발견되었습니다.');
} else {
  console.log('3의 배수를 찾을 수 없었습니다.');
}


// filter 조건을 만족하는 것을 배열로 만듬
var data = [4, 9, 16, 25];
var result = data.filter(function(value, index, array) {
  return value % 2 === 1;
});

console.log(result);


// sort
var ary = [5, 25, 10];
console.log(ary.sort());
// x - y < 0, x가 먼저 오고, x - y > 0, x가 나중에 오게 함 => 오름차순 정렬
console.log(ary.sort(function(x, y) {
  // return x - y;
  return y - x;  // 내림차순 정렬
}));


// '부장' : index가 0 => 가장 작은 값으로 사용
var classes = ['부장', '과장', '주임', '담당'];
var members = [
  { name: '남상미', clazz: '주임' },
  { name: '김준수', clazz: '부장' },
  { name: '정인식', clazz: '담당' },
  { name: '남궁민', clazz: '과장' },
  { name: '이상주', clazz: '담당' },
];
// 오름차순
console.log(members.sort(function(x, y) {
  return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}))
