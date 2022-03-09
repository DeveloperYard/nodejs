const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);// 길이가 10인 salt, 이건 cpu를 사용하기 때문에 지나치게 길게 하는 것은 좋지 않음
// 보통 8~12가 적당, 너무 길면 서버에 과부하를 줄 수 있음, 신중하게 결정!
console.log(`password:${password}, hashed : ${hashed}`);

const result = bcrypt.compareSync('abcd123', hashed);
console.log(result);