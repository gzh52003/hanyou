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
  // console.log("圈子推荐查询", result)
  res.send(result)
})

// get /api/circle/recommend/:id  查询单个推荐
router.get('/recommend/:id', async (req, res) => {
  const {
    id
  } = req.params
  console.log("id", id)
  const {
    result
  } = await mongo.find('circle_show', {
    id
  }, {})
  // console.log("圈子推荐单个数据查询", result)
  res.send(result)
})

// get /api/circle/topic/:id  查询单个推荐
router.get('/topic/:id', async (req, res) => {
  const {
    id
  } = req.params
  // console.log("id", id)
  const {
    result
  } = await mongo.find('circle_topic', {
    id
  }, {})
  // console.log("圈子话题单个数据查询", result)
  res.send(result)
})

// get /api/circle/topic/new 查询话题最新
router.get('/topic_new', async (req, res) => {
  const {
    result
  } = await mongo.find('circle_topic_new', {}, {})
  // console.log("最新", result)
  res.send(result)
})

// get /api/circle/topic/new 查询话题最新
router.get('/topicmore', async (req, res) => {
  const {
    result
  } = await mongo.find('circle_topic_more', {}, {})
  // console.log("最新", result)
  res.send(result)
})

module.exports = router