const fs = require('fs');
const data = [];
// 조금씩 읽어오기 때문에 event based
const readStream = fs.createReadStream('./file.txt', {
  highWaterMark: 8,// 64 KB - default
  encoding: 'utf-8'
});
 // on은 자기 자신을 리턴

readStream.once('data', chunk => { // 덩이리 받은 것을 배열에 넣어서 출력하고 있음
  //console.log(chunk);
  data.push(chunk);
  console.count('data')
}).on('end', () => {
  console.log(data.join(''));
}).on('error', error => {
  console.log(error);
});

// chaining을 통해 간단하게 작성할 수 있음!