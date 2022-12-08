// toString, valueOf method
var obj = new Object();
console.log(obj.toString());
console.log(obj.valueOf());

var dat = new Date();
console.log(dat.toString());
console.log(dat.valueOf());

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString());
console.log(ary.valueOf());

var num = 10;
console.log(num.toString());
console.log(num.valueOf());

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString());
console.log(reg.valueOf());


// obejct assign method
var pet = {
    type: '스노우 화이트 햄스터',
    name: '귀염둥이',
    description: {
      birth: '2014-02-15'
    }
  };
  
  var pet2 = {
    name: '슈퍼깜찍이',
    color: '흰색',
    description: {
      food: '해바라기 씨'
    }
  };
  
  var pet3 = {
    weight: 42,
    photo: 'http://www.wings.msn.to/img/ham.jpg'
  };
  
  Object.assign(pet, pet2, pet3);
  console.log(pet);
  
  // let merged = Object.assign({}, pet, pet2, pet3);
  // console.log(merged);


//   object create method
var obj = { x:1, y:2, z:3 };

var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

var obj3 = Object.create(Object.prototype, {
  x: { value: 1, writable: true, configurable: true, enumerable: true},
  y: { value: 2, writable: true, configurable: true, enumerable: true},
  z: { value: 3, writable: true, configurable: true, enumerable: true}
  }
);

for (var prop in obj3) {
   console.log(prop)
}
