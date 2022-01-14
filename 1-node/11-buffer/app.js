// // buffer -> Fixed size chunk of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf); //unicode 형태로 표현됨

console.log(buf.length);
console.log(buf[0]); // ASCII 코드 형태로 표현됨!
console.log(buf[1]);

console.log(buf.toString('utf-8')); // encoding된 정보로 바꿔줌, toString default -> utf-8

// create

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // 초기화 하지 않기 때문에 alloc보다 빠르나, 데이터가 들어 있을 수 있어 위험!

buf2[0] = 72;
buf2[1] = 105;

console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3.toString()); // 다른 값이 출력될 수도 있음! unsafe

// buffer는 숫자 또는 문자열 형태가 될 수 있음

const newBuf = Buffer.concat([buf, buf2, buf3]); // 이어 붙이기!
console.log(newBuf.toString());