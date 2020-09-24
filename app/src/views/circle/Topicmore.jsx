import React, { useEffect, useState } from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/cirtopicmore.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';

import request from '@/network/request'

export default function Topicmore() {
  let history = useHistory();
  let goto = (path) => {
    // console.log(path);
    history.push(path)
  }
  const [data, changeData] = useState([])
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const data = await request.get('/circle/topicmore')
      // 把获取到的数据 赋值给data，useState中定义的data
      // console.log(data)
      changeData(data)
    }
    fetchData();
  }, []);

  return (
    <div className="topicmore">
      <NavHeader className="circle_header">
        <div data-p="header_l" onClick={() => { goto('/circle') }}><Icon type="left" size="lg" style={{ marginTop: '5px' }} /></div>
        <div data-p="header_c">#推荐话题</div>
        <div data-p="header_r"><Icon type="ellipsis" size="md" style={{ marginTop: '10px' }} /></div>
      </NavHeader>
      <div className="topic_search">
        <input type="text" placeholder="搜索话题" />
      </div>
      <div className="search_content">
        <ul className="search_list">
          {
            data.map(item => {
              return (
                <li className="search_item" key={item.id} onClick={() => goto('/circle/topic/' + item.id)}>
                  <span>{item.name}</span>
                  <span></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}