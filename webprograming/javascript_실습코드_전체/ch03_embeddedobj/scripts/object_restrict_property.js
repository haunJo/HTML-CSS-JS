// object freeze method
'use strict';

var pet = { type: '스노우 화이트 햄스터', name: '귀염둥이' };

// Object.preventExtensions(pet);
// Object.seal(pet); 
// Object.freeze(pet);

pet.name = '슈퍼깜찍이';  // name 속성값 수정
delete pet.type;          // type property 삭제
pet.weight = 42;          // weight property를 새로 추가

console.log(pet);


