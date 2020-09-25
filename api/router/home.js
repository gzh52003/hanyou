const express = require('express');
const router = express.Router();
const {
  formatData
} = require('../utils/tools');
const mongo = require('../utils/mongo');
// 获取列表分类数据
router.get("/lists",async(req,res)=>{
    let {tag}=req.query
    let {result}=await mongo.find("home",{tag})
    if(result.length>0){
        res.send(formatData({data:result}))
    }else{
        res.send(formatData({code:0}))
    }
})

// let result=await mongo.find("Goods",{"retData.productList":{"$elemMatch":{
//     "uuid":id,
//      }}})
// 根据id获取详情数据
router.get("/homepage/:id",async(req,res)=>{
    let {id}=req.params
    let {result}=await mongo.find("home",{"data.poster":{"$elemMatch":{id}}})
    result=result[0].data.poster
    result=result.filter(item=>item.id===id)
    // console.log(result)
    if(result.length>0){
        res.send(formatData({data:result}))
    }else{
        res.send(formatData({code:0}))
    }
})
module.exports=router