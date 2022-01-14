const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
// 모든 데이터를 전부 읽고 쓰는 것은 비효율적임
fs.readFile('./file.txt', (_, data)=>{
  fs.writeFile('./file2.txt', data, ()=>{});

  //calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});