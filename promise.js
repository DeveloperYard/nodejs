'use strict';

// Promise is a JS object for asynchrounous operation
// State : Pending -> fulfilled or rejected
// Producer or Comsumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// const promise = new Promise((resolve, reject)=>{
//   // doing some heavy works.. (network, read files etc..)
//   console.log('doing something...');
//   setTimeout(()=>{
//     resolve('yard'); // 성공
//     //reject(new Error('no network')); // 실패, 에러 전달
//   }, 2000);
// });

// // 2. Consumers: then, catch, finally
// // then, chaining! then 호출 시  promise return, 해당 promise가 또 catch 호출!
// promise
//   .then((value)=>{
//     console.log(value);
//   })
//   .catch((error)=>{
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log('finally!!');
//   }); // 성공하든, 실패하든 관계없이 무조건 호출되는 finally!

// 3. promise chaining

// const fetchNumber = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(1);
//     }, 1000);
// });
// // then -> 값을 바로 전달할 수도 있고, 프로미스를 전달해도 됨!
// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve(num-1), 1000);
//   });
// })
// .then(num => console.log(num));

// 4. Error Handling

const getHen = ()=>
  new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('hen'), 1000);
  });
const getEgg = hen => 
  new Promise((resolve, reject)=>{
    setTimeout(()=> reject(new Error(`${hen}=>egg`)),1000);
  });

const cook = egg =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(`${egg}=>fried`), 1000);
  });


getHen()
.then(getEgg) // 계란을 받아오는 것에 문제가 생겨도 전체적인 흐름에 문제가 생기지 않도록 다른 값을 리턴해줄 수 있음
.catch(error=>{ // 바로 뒤에 catch문을 붙여서 처리!
  return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);

