const {
  express,
  Router,
  json,
  urlencoded
} = require("express");
const router = Router();
const cors = require("../filter/cors");

//格式化url 
router.use(json(), urlencoded())
//允许跨域
router.use(cors);
const session = require('express-session');

//关于韩游的接口
const strategy = require("./strategy")
// 关于韩游首页的接口
const homeRouter = require("./home");

const {
  formatData
} = require("../utils/tools");
const {
  use
} = require("./strategy");

//设置会话 session 运行在服务器端，当客户端第一次访问服务器时，可以将客户的登录信息保存
router.use(session({
  secret: 'xzl',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true
    maxAge: 1000 * 60 * 60 * 2
  }
}))


//检验token
router.get("/jwtverify", (req, res) => {
  const {
    authorization
  } = req.query;

  // console.log("vvvv", authorization); //未定义？
  if (token.verify(authorization)) {
    res.send(formatData())
  } else {
    res.send(formatData({
      code: 0
    }))

  }
})

//关于韩游网的接口
router.use("/strategy", strategy)
// 关于韩游首页的接口
router.use("/home",homeRouter)

module.exports = router;