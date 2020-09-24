import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom"
import "@assets/strategy/css/common.scss"
import "@assets/strategy/css/List.scss"

//引入请求 
import request from "@network/request"

//导入组件
import NavHeader from "@com/navHeader/NavHeader.jsx"
import "@assets/strategy/css/strategy.scss"

//导入ui组件
import { Tabs, WhiteSpace } from 'antd-mobile';

const navLists = [
  { id: 93, title: '韩国介绍', ind: "kFlow" },
  { id: 94, title: '韩国地区', ind: "kIntroduce" },
  { id: 98, title: '韩流资讯', ind: "kRegion" },
  { id: 100, title: '旅游资讯', ind: "kTravel" },
];

function Lists() {
  // const history = useHistory()
  // const goback = () => {
  //   history.goBack()
  // }

  //查询所有数据
  const [newsList, setDate] = useState([]);
  useEffect(() => {
    let res;
    async function getData() {
      res = await request.get("/strategy/lists")
      // console.log("我是列表查询", res[0]);
      setDate(res[0])
    }
    getData();
  }, []);

  let newData = []
  for (let key in newsList) {
    if (key !== "_id") {
      newData.push(newsList[key])
    }
  }

  const [currentIdx, changeTab] = useState(0)
  // console.log("我是点击的", currentIdx);

  return (
    <div className="str_page sta_list">
      <NavHeader className="sta_header">
        <div data-p="header_c">咨询</div>
      </NavHeader>

      <div className="sta_main">
        <div className="sta_section">
          {/* 导航栏 */}
          <div className="nav">
            {/* 选项卡 */}
            <ul className="nav-tab">
              {
                navLists.map((item, idx) => {
                  return (
                    <li onClick={changeTab.bind(null, idx)} key={item.id} className={idx === currentIdx ? "liActive" : ""
                    }  > { item.title}</li>
                  )
                })
              }
            </ul>

            {/* 内容 */}
            <div className="nav-con">
              {
                newData.map((item, idx) => {
                  return (
                    <div key={idx} className={idx === currentIdx ? "navCon-item ConActive" : "navCon-item"}>
                      {
                        item.map((con_item, i) => {
                          return (
                            <NavItems key={i} conItem={item} currentIdx={currentIdx} idx={idx} />
                          )
                        })
                      }
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


// 子组件
function NavItems({ conItem, currentIdx, idx }) {
  // console.log("conItem=", conItem);
  return (
    <div className="nav_items">
      <ul>
        {
          conItem.map((item, i) => {
            return (
              currentIdx === idx ? <li key={item.id}>
                <div className="item-l">
                  <h2>{item.title}</h2>
                  <div className="item-l-info">
                    <time>{item.inputtime}</time>
                    <span><em>{item.views} </em>浏览</span>
                  </div>
                </div>
                <div className="item-r">
                  <img src={item.thumb} alt="" />
                </div>
              </li> : ""
            )
          })
        }
      </ul>
    </div>
  )
}

export default Lists;