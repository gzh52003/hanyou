const express = require('express');
const router = express.Router();
const {
  formatData
} = require('../utils/tools');
const mongo = require('../utils/mongo');

// get /api/strategy 查询图书分类所有图书
router.get('/', async (req, res) => {
  const {
    result
  } = await mongo.find("strategy", {}, {})
  console.log("我是查询攻略", result)
  res.send(result)
})

// 获取单个图书的信息
router.get('/:bookid', async (req, res) => {
  const {
    c_type
  } = req.query
  const {
    bookid,
  } = req.params;

  // console.log('我是cate的id=', bookid, c_type)
  const {
    result
  } = await mongo.find(c_type, {
    bookid: bookid * 1
  });
  // console.log("我是根据id", result)
  res.send(formatData({
    data: result
  }));
})

// 获取单个包含目录和价钱的接口！
router.get('/catalog/:bookId', async (req, res) => {
  const {
    c_type,
    page = 1,
    size = 10
  } = req.query
  const {
    bookId,
  } = req.params;

  // console.log('我是cate的id=', bookId, c_type, page, size)
  const {
    result,
    datalen
  } = await mongo.find(c_type, {

    bookId: bookId * 1
  }, {
    page,
    size,
  });
  // console.log("我是根据id", result)
  res.send(formatData({
    data: result,
    datalen
  }));
})


module.exports = router;