// import { composeWithDevTools } from 'redux-devtools-extension';

// enhancer = composeWithDevTools(); //() 里面都是需要合并的中间件 enhancer
// const store = createStore(reducer,enhancer)

//01：引入 redux
import {
  createStore,
  applyMiddleware
} from "redux"

import {
  composeWithDevTools
} from 'redux-devtools-extension';

//02：对reducer的引入 -> 从外界引入！
import reducer from "./reducer/index"
import mysaga from './saga/index'; //引入saga配置！

//使用saga1 引入saga
import createSagaMiddleware from 'redux-saga';
//使用saga2 创建saga中间件
const sagaMiddleware = createSagaMiddleware();
//使用safa3 saga中间件和store结合 这需要使用 redux中的applyMiddleware
let enhancer = applyMiddleware(sagaMiddleware)

//03：创建store对象
const store = createStore(reducer, enhancer);

// 使用safa4 运行saga配置 这个配置还需要从外面引入的！
sagaMiddleware.run(mysaga);

//04：导出 store对象
export default store;