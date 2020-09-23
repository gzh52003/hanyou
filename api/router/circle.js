const express = require('express')
const router = express.Router()
const {
  formateData
} = require('../utils/tools')
const mongo = require('../utils/mongo')

// get /api/circle 查询推荐
router.get('/', async (req, res) => {
  const {
    result
  } = await mongo.find('circle_dynamic', {}, {})
  console.log("圈子推荐查询", result)
  res.send(result)
})

module.exports = router