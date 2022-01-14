console.log('code1');
console.time('timeout 0');
setTimeout(()=>{
  console.log('setTimeout 0');
  console.timeEnd('timeout 0');
}, 0); // 정확하게 0초가 보장되지 않음!, 콜백함수가 실행되기 위해서는 콜 스택이 빌 때까지 기다려야 함

// console.log('code2');
// setImmediate(()=>{
//   console.log('setImmediate');
// });

// console.log('code3');
// process.nextTick(()=>{
//   console.log('process.nextTick'); // 우선순위가 가장 높음!
// });

// setTimeout, setImmediate는 우선순위 비슷!

for(let i = 0; i<1000; i++){};