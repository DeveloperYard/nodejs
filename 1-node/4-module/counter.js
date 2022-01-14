// let count = 0;

// function increase() {
//   count++;
// }

// function getCount() {
//   return count;
// }

// module.exports.getCount = getCount;
// //module.exports.increase = increase;
// console.log(module.exports === exports);
// exports = {};// 특정한 값을 바로 할당하면 위험할 수 있음!
// // exports = {}; 다른 값을 할당을 해버리면 재할당할 수 없음!
// module.exports.increase = increase;
// // 재할당 후에는 전혀 다른 것이 되어버림!
// console.log(module.exports === exports);
// // 내부적으로만 변경!

// console.log(module)

class counter {
  constructor(){
    this.count = 0;
  }

  increase(){
    this.count++;
  }

  getCount(){
    return this.count;
  }
}

exports.counter = counter;
