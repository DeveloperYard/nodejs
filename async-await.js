// async-await -> promise에서 조금 더 간편한 api 제공!
// syntatic sugar!

// async & await
// clear style of using promise
// 항상 둘 중에 하나가 맞는 것이 아니라 둘 중 하나를 골라 써야할 때가 있음!

// 1. async
// function fetchUser(){
//   // do network request in 10 secs..
//   return 'yard';
// }

// const user = fetchUser();
// // 비동기 처리를 하지 않으면 웹페이지 UI를 표시하는 데 10초가 걸림! (위 함수에서 가정)
// // 오래 걸리는 일들은 비동기적으로 처리할 수 있도록 해야함!
// console.log(user);

// ex. promise

// function fetchUser(){
//   return new Promise((resolve, reject)=>{
//     //return 'yard'; // 그냥 리턴만 하면 pending state!
//     resolve('yard');
//   });
// }

// const user = fetchUser();
// user.then(console.log);

async function fetchUser(){ // code block이 promise로 바뀜!
  return 'yard'
}

const user = fetchUser();
user.then(console.log);

// 2. await

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(2000); // await -> async 함수 내에서만 쓰일 수 있음, delay가 끝날때까지 기다림
  // throw 'error';  // error처리 하고 싶으면 pickFruits 함수 내에 try-catch 문 작성!
  return 'apple';
}
// 아래 await은 마치 동기적 코드를 작성하는 것 처럼 느껴지게 함!
async function getBanana(){
  await delay(1000);
  return 'banana';
}

// function getBanana(){
//   return delay(1000)
//   .then(()=>'banana');
// }

async function pickFruits(){
  // return getApple()
  // .then(apple => {
  //   return getBanana()
  //   .then(banana => `${apple} + ${banana}`);
  // }); // callback hell occur able
  const applePromise = getApple(); // 두 개의 프로미스를 따로 해서 병렬적으로 사과, 바나나를 동시에 따서 출력!
  // 병렬적으로 하고싶을 땐! 밑의 파트.
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

//pickFruits().then(console.log);

// 3. useful Promise APIs
// 이와 같이 병렬적으로 간편하게 처리 가능!
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()]) // 배열의 형태로 프로미스의 결과를 모아줌 
  .then(fruits=>fruits.join(' + ')); // 각 배열의 문자열을 join으로 합침.
}

pickAllFruits().then(console.log)

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]); // 먼저 도착하는 것 처리!
}

pickOnlyOne().then(console.log);

