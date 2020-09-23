import React, { useEffect, useState, useRef } from "react"
import { Switch, Route, NavLink } from "react-router-dom"
import NavHeader from "@com/navHeader/NavHeader.jsx"
import "@assets/strategy/strategy.scss"

import RouteWithSubRoutes from "../../components/RouteWithSubRoutes"
import request from "@network/request"
import straData from "@assets/strategy/strategy.json"
import { useHistory } from "react-router-dom";

import { BackTop } from 'antd';
import { RightOutlined, HistoryOutlined, FireOutlined, StarOutlined, VerticalAlignTopOutlined, CloseOutlined } from '@ant-design/icons';
import AppUpdate from "./AppUpdate"
import TT from "./Lists"

//拿到攻略的数据
let straList = straData.data
// console.log("我是攻略的data", straList);

function Strategy({ routes }) {
  //是否显示 广告
  const isShowAd = useRef()
  const showAd = () => {
    isShowAd.current.className = "adActive"
  }
  let history = useHistory();
  const goto = () => {
    history.replace("/strategy/tt")
  }
  const download = () => {
    history.push("/strategy/appupdata")
  }

  return (
    <div className="sta_page">
      <NavHeader className="sta_header">
        <div data-p="header_l" onClick={goto}>左侧</div>
        <div data-p="header_c">中间</div>
        <div data-p="header_r">右侧</div>
      </NavHeader>
      <div className="sta_main">
        <div className="sta_section">
          {/* 新闻发现 */}
          <div className="discover_new">
            <div className="more">更多 <RightOutlined /></div>
            <div className="discover_con">
              <a href="###">
                <dl>
                  <dt>
                    <p>受新型冠状病毒影响以及防止疫情扩散，包括韩国部分知名庆典在内的各种活动决定取消或延期，具体信息请参考内文。</p>
                    <div className="news-bottom">
                      <span>
                        <i></i>
                          旅游资讯
                        </span>
                      <time>
                        <HistoryOutlined />
                        <em>2020-03-26</em>
                      </time>
                      <span>
                        <FireOutlined />
                        <em>7811</em>
                      </span>
                    </div>
                  </dt>
                  <dd>
                    <img src="img/straImg/1585211850303354.jpg" alt="" />
                  </dd>
                </dl>
              </a>
            </div>
          </div>
          {/* 大家知道 */}
          <div className="discover_know">
            <div className="discover_know_title">
              <a href="###">
                <span>
                  <StarOutlined />  大家都知道
                  </span>
                <span className="more">更多 <RightOutlined /></span>
              </a>
              <div className="discover_know_card">
                <ul>
                  <li>
                    <a href="###">
                      <img src="img/straImg/discovery_introduce.png" alt="" />
                      <span>韩国介绍</span>
                    </a>        </li>
                  <li>
                    <a href="###">
                      <img src="img/straImg/discovery_Travel.png" alt="" />
                      <span>旅游咨询</span>
                    </a>
                  </li>
                  <li>
                    <a href="###">
                      <img src="img/straImg/discovery_area.png" alt="" />
                      <span>韩国地区</span>
                    </a>
                  </li>
                  <li>
                    <a href="###">
                      <img src="img/straImg/discovery_Information.png" alt="" />
                      <span>韩流咨询</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 发现更多精彩 */}
          <div className="discover_know_more">
            <div className="know_more_line"></div>
            <div className="know_more_box">
              <img src="img/straImg/home_discover.png" alt="" />
              <span>发现更多精彩</span>
            </div>
          </div>
          {/* 主体区域 */}
          <div className="discover_content">
            {
              straList.map((item, idx) => {
                return (
                  <div className="discover_content_list" key={item.id}>
                    <dl>
                      {
                        idx <= 3 ? <dt style={{ backgroundPosition: `0 ${-0.46 * idx}rem ` }}></dt> :
                          <dt style={{ backgroundPosition: `0.56rem ${-0.46 * (idx - 4)}rem` }}></dt>
                      }
                      <dd>{item.mainCon.name}</dd>
                    </dl>
                    <ul>
                      {
                        item.straList.map(items => {
                          return (
                            // 点击事件
                            <li key={items.InfoLink}  >
                              {items.InfoLink}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>

        </div>
        {/* sta_section 结束 */}
      </div>
      {/* 返回顶部 */}
      <BackTop>
        <div className="goback"><VerticalAlignTopOutlined className="backIcon" /> <em>顶部</em> </div>
      </BackTop>

      {/* 广告 */}
      <div className="stra_ad" ref={isShowAd}>
        <div onClick={showAd} className="close"> <CloseOutlined className="close_icon" /> </div>
        <img src="http://m.hanyouwang.com/statics/images/mobile/72.png" alt="" />
        <div className="ad_box">
          韩国旅行 找韩游 <br />
          APP下单 门票一折起
        </div>
        <div className="download" onClick={download} >立即下载</div>
      </div>
    </div >
  )
}

export default Strategy;