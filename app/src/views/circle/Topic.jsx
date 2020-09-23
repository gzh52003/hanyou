import React from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/cirtopic.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';

export default function Topic() {
  let history = useHistory();
  let goto = (path) => {
    history.push(path)
  }

  return (
    <div className="cirtopic">
      <NavHeader className="circle_header">
        <div data-p="header_l" onClick={() => { goto('/circle') }}><Icon type="left" size="lg" style={{ marginTop: '5px' }} /></div>
        <div data-p="header_c">#韩国网红打卡地#</div>
        <div data-p="header_r"></div>
      </NavHeader>
      <div className="main_content">
        <div className="top_img"><img src="" alt="" /></div>
        <div className="statistics_content">
          <div className="statistics-item">
            <span className="name">1203</span>
            <span className="title">围观</span>
          </div>
          <div className="statistics-item">
            <span className="name">378</span>
            <span className="title">参与</span>
          </div>
          <div className="statistics-item">
            <span className="name">44</span>
            <span className="title">动态</span>
          </div>
        </div>
        <div className="activity-content">
          <div className="activity-inner">
            <div className="left">
              <img src="" alt="" />
              <div>
                <p className="name">森森不缺木</p>
                <p className="name_label">发起者</p>
              </div>
            </div>
            <div className="right">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div>
                <p className="text">活跃榜</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
