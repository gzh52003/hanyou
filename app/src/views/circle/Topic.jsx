import React, { useEffect, useState } from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/cirtopic.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';

import request from '@/network/request'

export default function Topic(props) {
  let history = useHistory();
  let goto = (path) => {
    history.push(path)
  }
  const tabs = [
    { title: '最新' },
    { title: '最赞' },
  ];
  const [topicData, changeDetailsData] = useState([])
  const [newData, changeNewData] = useState([])
  useEffect(() => {
    // console.log(props)
    const id = props.match.params.id
    async function fetchData() {
      // You can await here
      const topicdata = await request.get('/circle/topic/' + id)
      const newdata = await request.get('/circle/topic_new')
      // 把获取到的数据 赋值给data，useState中定义的data
      // console.log(data)
      changeDetailsData(topicdata)
      changeNewData(newdata)
    }
    fetchData();
  }, []);


  return (
    <div className="cirtopic">
      {
        topicData.map(item => {
          return (
            <div key={item.id}>
              <NavHeader className="circle_header">
                <div data-p="header_l" onClick={() => { goto('/circle') }}><Icon type="left" size="lg" style={{ marginTop: '5px' }} /></div>
                <div data-p="header_c">#{item.name}#</div>
                <div data-p="header_r"></div>
              </NavHeader>
              <div className="main_content">
                <div className="top_img"><img src={item.icon_tburl} alt="" /></div>
                <div className="statistics_content">
                  <div className="statistics-item">
                    <span className="name">{item.watch_count}</span>
                    <span className="title">围观</span>
                  </div>
                  <div className="statistics-item">
                    <span className="name">{item.participation_count}</span>
                    <span className="title">参与</span>
                  </div>
                  <div className="statistics-item">
                    <span className="name">{item.dynamic_count}</span>
                    <span className="title">动态</span>
                  </div>
                </div>
                <div className="activity-content">
                  <div className="activity-inner">
                    <div className="left">
                      <img src={item.initiator_user.avatar} alt="" />
                      <div>
                        <p className="name">{item.initiator_user.username}</p>
                        <p className="name_label">发起者</p>
                      </div>
                    </div>
                    <div className="right">
                      {
                        item.user_list.map(imgItem => {
                          return (
                            <div key={imgItem.id}>
                              <img src={imgItem.avatar} alt="" />
                            </div>
                          )
                        })
                      }
                      <div>
                        <p className="text">活跃榜</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div style={{width:"100%",height:"10px",backgroundColor:'#f6f6f6'}}></div>
      <WhiteSpace />
      <Tabs tabs={tabs} animated={false} useOnPan={false}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' }}>
          <ul className="circle_waterfall">
            {
              newData.map(item => <li key={item.id} onClick={() => { goto('/circle/details/' + item.id) }}>
                <div className="dynamic_img"><img src={item.sharedata.image} alt="" /></div>
                <div className="dynamic_info">
                  <p className="content">{item.content}</p>
                  <p className="tags"></p>
                  <div className="bottom">
                    <div className="left">
                      <span className="avatar">
                        <img src={item.user.avatar} alt="" />
                      </span>
                      {
                        item.user.nickname
                          ?
                          <span className="username">{item.user.nickname}</span>
                          :
                          <span className="username">{item.user.username}</span>
                      }
                    </div>
                    <div className="right">
                      {/* <span className="like_btn"></span> */}
                      <span>{item.applaud_count}</span>
                    </div>
                  </div>
                </div>
              </li>
              )
            }

          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          没有更多内容了
          </div>
      </Tabs>
    </div>
  )
}
