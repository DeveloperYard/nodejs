const fs = require('fs');

// sync 형식은 사용하지 않는 것이 좋음!

// 3가지 형태
// rename(...., callback(error, data)=>{}) -> async
// try{renamSync(....)} catch(e){} ->sync, blocking!, 이 작업이 끝날 때까지 다음 줄로 넘어가지 않음, error detection through try and catch
// promises.rename().then().catch(0)

// sync
// try {fs.renameSync('./text.txt', './text-new.txt');}
// catch (error){
//   console.error(error);
// }
// console.log('hello'); // try-catch가 없으면 출력되지 않고 node가 죽음!


fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});

console.log('hello');

fs.promises.rename('./text2.txt', './text-new.txt')
  .then(()=>{console.log('done')})
  .catch(console.error);