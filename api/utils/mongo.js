//引入mongodb数据库 => MongoClient mongo =>客户端
const {
  MongoClient,
  ObjectId
} = require("mongodb");

// mongo连接网址
const url = 'mongodb://localhost:27017';

//mongo连接 数据库名称
const dbName = 'ali-novel';

async function connect() {
  const client = await MongoClient.connect(url); //链接数据库

  const db = client.db(dbName); //匹配数据库
  return {
    client,
    db
  }
}

async function find(cloName, query = {}, options = {}) { //参数1：数据库中的集合（表） 参数2：操作的数据库语句 参数3：配置参数 
  //1:链接数据库
  let {
    db,
    client
  } = await connect();
  //2:匹配数据库集合 
  let collection = db.collection(cloName);

  const datalen = await collection.count().then(data => data)
  // console.log("我是总数", datalen);
  //3：最后根据所选的集合 操作数据库 查询操作
  console.log("我是query", query);
  let result = collection.find(query, {
    projection: { //查询的时候 过滤字段！ 密码不返回给前端！
      password: false
    }
  });

  if (query._id && typeof query._id === 'string') {
    query._id = ObjectId(query._id);
  }

  //分页功能 
  // 需要的参数：页数 限制显示的多少页 跳过的数据条数 eg: 1页 - 0~5 - 0条 2页 - 5~10条 - 5条 3页 - 10~15 - 10条
  //01：查询跳过的记录
  if (options.skip) {
    result = result.skip(options.skip) //result.skip()方法 设置跳过记录 
  }
  //02：设置显示的条数
  if (options.limit) {
    result = result.limit(options.limit)
  }
  //排序的功能
  if (options.sort) { //前端传来的之 ["peice"] 或者["price","1"] 第一种为默认的降序 第二种为升序
    let key, val;
    key = options.sort[0]; //拿到key值 
    if (options.sort.length > 1) {
      val = options.sort[1] * 1;
    } else {
      val = -1;
    }
    result = result.sort({ //对象[字符串] 
      [key]: val
    })
  }

  if (query.name) {
    const font = query.name
    let result = collection.find({
      'name': {
        '$regex': font,
        "$options": 'i'
      }
    });
    result = await result.toArray();
    return {
      result
    };
  }

  result = await result.toArray(); //返回的是一个数组的形式！给与前端！

  // console.log("我是mongo中的res", result);

  //最后 客户端关闭数据库  
  client.close();
  return {
    result,
    datalen
  } //返回查询结果 一个promise对象

}


//数据库操作之 增函数 参数1：集合 参数2：data数据（增的数据）
async function insert(colName, data) {
  //1:链接数据库 并且把db 和 client在链接数据库中导出 
  let {
    db,
    client
  } = await connect()

  //2：匹配数据库集合
  const collection = db.collection(colName);
  //3：需要判断传入的数据 是一条还是多条 一条就是insertOne 多条就是insertMany 在集合之中插入数据 
  const result = await collection[Array.isArray(data) ? "insertMany" : "insertOne"](data);

  //3：关闭数据库连接
  client.close();
  return result
}

//数据库之 删 
// `db.集合的名称.deleteMany({name:"ppp"})`
async function remove(colName, query) {
  //1：链接数据库
  let {
    db,
    client
  } = await connect()
  //根据id删除 数据

  if (query._id && typeof query._id === 'string') {
    query._id = ObjectId(query._id);
  }
  //批量删除的时候 query是数组 需要遍历转化id
  // console.log("我query", query._id.$in);
  else if (query._id.$in.length >= 1)
    query._id.$in = query._id.$in.map(item => {
      if (item && typeof item === 'string') {
        item = ObjectId(item);
      }
      // console.log("我是item", item, typeof item);
      return item
    })


  // console.log("我是mongo", query);
  //2：匹配集合
  let collection = db.collection(colName);

  let result = await collection.deleteMany(query);

  // result = result.toArray();
  client.close();
  return result;
}

//数据库之 改
// `db.集合的名称.updateOne( {name:"ppp",age:10 } , { $set : { name:"嘿嘿",age:20} } );`
//根据id来修改 数据库中的data
async function updata(colName, query, newData) { //newData{$set:{price:200,qty:2},$inc:{view:1}}
  let {
    db,
    client
  } = await connect();
  let collection = db.collection(colName);

  //根据id删除 数据
  if (query._id && typeof query._id === 'string') {
    query._id = ObjectId(query._id);
  }

  let result = await collection.updateMany(query, newData);
  // console.log("我是更新的result" + result);
  return result;
}

//把增删改查 到出  在引入这个工具函数时候 调用！
module.exports = {
  insert,
  find,
  remove,
  updata
}