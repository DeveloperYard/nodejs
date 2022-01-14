const path = require('path');

// 운영체제별로 표기법이 다를 수 있으니 path.sep을 이용!
// POSIX (Unix: Mac, Linux) : 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

// 'c\file.txt 이런 식으로 작성 x !! 운영체제별로 표기법이 다르기 때문

console.log(path.sep); // 구분자
console.log(path.delimiter); // 환경변수

console.log(path.basename(__filename));

console.log(path.basename(__filename,'.js'));

console.log(path.dirname(__filename));

console.log(path.extname(__filename)); // 확장자

// parse

const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute

console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대 경로로 시작
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로로 시작하는지 검사


// normalize

console.log(path.normalize('./folder//////sub'));


// join

console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
