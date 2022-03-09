const jwt = require('jsonwebtoken');

const secret = 'VmYq3t6w9z$C&F)J@NcRfUjWnZr4u7x!';
const token = jwt.sign({
  id: 'yard',
  isAdmin: false,

}, 
  secret,
  // options?
  {expiresIn: 2 } // 2 seconds
  // 특정 시간이 지나면 더 이상 유효하지 않도록 할 수 있음
)

setTimeout(()=>{
  // invalid signature -> 한 번 발행된 토큰은 변경되면 안됨, 따라서 이걸 통해 사용자가 악의적으로 변경됐는지 파악 가능
  jwt.verify(token, secret, (error, decoded) => {
  console.log(error, decoded);
  });
}, 3000);


console.log(token);