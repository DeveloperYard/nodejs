// console.log('logging...')
// console.clear()

// // log level

// console.log('log') //개발
// console.info('info') // 정보
// console.warn('warn') // 발생하면 안되지만, fatal하진 않음. 경고단계! 
// console.error('error') // 에러, 사용자 에러, 시스템 에러

// // 심각성 종류에 따라 하이라이트 색상이 달라짐!
// // 구분하기 어려움!

// // 심각성에 따라 레벨별로 심각성을 알아차리기 쉬움, log만 사용하면 심각성 확인 힘듦. 레벨별로!


// // assert

// console.assert(2 === 3, 'not same!'); // 틀렸을 때 출력 가능!
// console.assert(2 === 2, 'same!')

// print object

// const student = {name: 'yard', age: 26, company: {name: 'AC'}};
// console.log(student);
// console.table(student) // 표 형태로 출력이 가능!
// console.dir(student, {showHidden: true, colors: false, depth: 1})

// counting

// function a() {
//   console.count('a function');
// }

// a();
// console.countReset('a function');
// a();

// trace

// function f1() {
//   f2();
// }

// function f2() {
//   f3();
// }

// function f3() {
//   console.log('f3');
//   console.trace();
// }

// f1();