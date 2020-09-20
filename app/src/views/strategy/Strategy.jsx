import React from "react"
import NavHeader from "@com/navHeader/NavHeader.jsx"
import "@assets/strategory/strategory.scss"

import { RightOutlined, HistoryOutlined, FireOutlined, StarOutlined } from '@ant-design/icons';

class Strategy extends React.Component {
  

  goto = () => {
    console.log("我是goto");
  }
  render() {
    return (
      <div className="sta_page">
        <NavHeader className="sta_header">
          <div data-p="header_l" onClick={this.goto}>左侧</div>
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
              <div className="discover_content_list">
                <dl>
                  <dt>
                    <span></span>
                  </dt>
                  <dd>签证 · 护照</dd>
                </dl>
                <ul>
                  <li>
                    <a href="###">护照</a>
                  </li>
                  <li>
                    <a href="###">韩国签证</a>
                  </li>
                  <li>
                    <a href="###">中国公民免签入韩介绍</a>
                  </li>
                </ul>
              </div>
              <div className="discover_content_list">
                <dl>
                  <dt>
                    <span></span>
                  </dt>
                  <dd>签证 · 护照</dd>
                </dl>
                <ul>
                  <li>
                    <a href="###">护照</a>
                  </li>
                  <li>
                    <a href="###">韩国签证</a>
                  </li>
                  <li>
                    <a href="###">中国公民免签入韩介绍</a>
                  </li>
                </ul>
              </div>
            </div>


            {/* sta_section 结束 */}
          </div>
        </div>
      </div>
    )
  }
}

export default Strategy;