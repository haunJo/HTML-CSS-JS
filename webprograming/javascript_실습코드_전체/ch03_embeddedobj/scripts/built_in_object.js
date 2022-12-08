var str = '안녕하세요!';
// String을 new로 해서 문자열 생성하지 않는 것을 권장
// var str = new String('안녕하세요!');
console.log(str.length);

// boolean 기본 data type은 객체 인스턴스 만들어 사용 권장 안함
var flag = new Boolean(false);

// if문에 flag를 check하면 true로 됨 (flag가 new로 객체 생성하여, 객체는 무조건 true)
if (flag) {
  console.log('flag는 true입니다!');
}