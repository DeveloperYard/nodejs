function hello() {
  console.log(this); // this -> global!
  //console.assert(this !== global, 'same!');
  console.log(this === global);
}
// 함수의 경우 전역이 성립.

hello();

class A {
  constructor(num){
    this.num = num;
  }

  memberFunction() {
    console.log('----- class -----');
    console.log(this);
    console.log(this === global);
  }
}
// class의 this는 class 자기 자신을 가리키므로 전역이 아님!

const a = new A(1);
a.memberFunction();

console.log('----- global scope -----');
console.log(this); // global objects는 아님!
console.log(this === module.exports); // true, node에서 this는 module의 exports를 가리키고 있음!