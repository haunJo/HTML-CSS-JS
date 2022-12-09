var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(delete ary[0]); // 해당 address에 있는 data 삭제
console.log(ary); // 결과 : [ <1 empty item>, 'Ajax', 'ASP.NET' ]


var obj = {x:1, y:2};
console.log(delete obj.x); // 해당 data만 삭제 
console.log(obj.x); // 결과 : undefined

var obj2 = {x:obj, y:2};
console.log(delete obj2.x);
console.log(obj);

var data1 = 1;
console.log(delete data1); //삭제 불가
console.log(data1);

data2 = 10; // 삭제 가능
console.log(delete data2);
console.log(data2);
