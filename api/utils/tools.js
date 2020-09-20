const crypto = require('crypto');

function formatData({
  code = 1,
  data = [],
  msg = 'success',
  datalen = "",
  kucun = ""
} = {}) {

  if (code === 0) {
    msg = 'fail';
  }

  return {
    code,
    data,
    msg,
    //数据的长度
    datalen,
    // 库存
    kucun
  }
}

function md5(data, privateKey = 'xzl') {

  const hash = crypto.createHash('md5');
  hash.update(data + privateKey); // 加盐 盐值
  const result = hash.digest('hex');

  return result;
}


module.exports = {
  formatData,
  md5
}