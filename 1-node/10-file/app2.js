const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
.then(data => console.log(data))
.catch(console.error);

// writing a file

fs.writeFile('./file.txt', 'Hello, Yard coders! :) ') // 같은 파일에 쓰면 덮어서 씀
.catch(console.error);

fs.appendFile('./file.txt', 'Yo, Yard coders! :) ')
.then(()=>{
  fs.copyFile('file.txt', 'file2.txt')
  .catch(console.error);
})
.catch(console.error);

// 비동기는 순차적으로 될 수도, 안될수도 있음. then을 통해 순차적으로 처리할 수 있음!

// copy
// fs.copyFile('file.txt', 'file2.txt')
//   .catch(console.error);

// folder

fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);
