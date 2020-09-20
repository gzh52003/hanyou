const express = require("express");
const router = require("router");
const path = require("path");
//导入端口号
const {
  PORT
} = require('./port/config.json');
//导入所有路由
const allRouter = require("./router")

//创建一个服务器
const app = express();

//创建一个静态服务器 => 把静态资源的东西开放 为了html等被访问到！
app.use(express.static((path.join(__dirname, "/")), {
  // maxAge: 60 * 60 * 1000 * 24 //设置浏览器的缓存效果！
}));

app.use("/api", allRouter);
//服务器的监听
app.listen(PORT, () => {
  console.log("server is running " + PORT);
})