import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

//引入请求
import request from "@/network/request"

//考虑 单元测试  需要使用 call方法
function* getUser(action) {
  const {
    data
  } = yield call(request.get, '/user/' + action.userid)
  // console.log("getUser请求的data", action, data); //测试能拿得到！
  //以上 仅仅是在中间件的操作 还需要触发到 reducer之中！
  yield put({
    type: action.type.replace("_async", ""),
    user: data
  })
}

//初始化 测试 是否可以
function* init() {
  //监听用户 是否发起了get_user事件
  yield takeLatest("get_user_async", getUser)
}

export default init;