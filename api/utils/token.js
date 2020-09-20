const jwt = require('jsonwebtoken');

const privateKey = 'xzl';

//创建一个token函数！
function create(data = {}, expiresIn = '2h') {
  const token = jwt.sign({
    ...data
  }, privateKey, {
    // token有效期
    expiresIn
  });

  return token;
}

//验证token是否存在！
function verify(token) {
  let result;
  try {
    jwt.verify(token, privateKey); //验证这个token 假如存在，result为true！
    result = true;
  } catch (err) {
    result = false
  }

  return result;
}


module.exports = {
  create,
  verify
}