const whiteList = ["http://112.74.111.183:20020", "http://localhost:8080", "http://localhost:8081"]

function cors(req, res, next) {
  // 白名单允许跨域
  const origin = req.get('Origin')
  if (whiteList.includes(req.get('Origin'))) {
    res.set({
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
      "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Credentials": true
    })
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
      res.sendStatus(200); /*让options请求快速返回*/
    } else {
      next();
    }
  } else {
    res.send(401);
  }
}

module.exports = cors;

// function cors(req, res, next) {

//   // 获取请求者的域名
//   res.set({
//     "Access-Control-Allow-Origin": "http://localhost:8080",
//     "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
//     "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE,OPTIONS",
//     "Access-Control-Allow-Credentials": true
//   })
//   // 跨域请求CORS中的预请求
//   if (req.method == "OPTIONS") {
//     res.sendStatus(200); /*让options请求快速返回*/
//   } else {
//     next();
//   }
// }

// module.exports = cors;