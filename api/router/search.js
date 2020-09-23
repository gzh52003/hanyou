const express = require('express');
const router = express.Router();
const {
  formatData
} = require('../utils/tools');
const mongo = require('../utils/mongo');

// get /api/search 模糊搜索
router.get('/', async (req, res) => {
  let {
    page = 1, size = 10, sort = "time", q,
  } = req.query;

  const skip = (page - 1) * size; //0
  const limit = size * 1; //10

  console.log("我是查询的字段", q);

  // 处理排序参数
  sort = sort.split(','); // ['price'],['price','-1']

  try {
    // 查询所有商品
    const {
      result
    } = await mongo.find('bookAll', {
      // title 为查询的字段 就是你数据库的某个字段！  q为要查询的值
      title: {
        $regex: q
      }
    }, {
      skip,
      limit,
      sort
    })
    res.send(formatData({
      data: result
    }))
  } catch (err) {
    res.send({
      status: 400
    })
  }

})

module.exports = router;