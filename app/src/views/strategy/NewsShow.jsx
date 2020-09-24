import React, { useState, useEffect, useRef } from "react";
import "@assets/strategy/css/common.scss"
import "@assets/strategy/css/List.scss"
import "@assets/strategy/css/newsShow.scss"

//导入组件
import NavHeader from "@com/navHeader/NavHeader.jsx"
import "@assets/strategy/css/strategy.scss"

import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { useHistory } from "react-router-dom";



function NewsShow() {

  const [data, changeData] = useState(['1', '2'])
  const [imgHeight, changeHeight] = useState(176)
  const [slideIndex, changeIdx] = useState(1)
  useEffect(() => {
    setTimeout(() => {
      changeData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'])
    }, 100);

    if (slideIndex !== data.length - 1) {
      changeIdx({ slideIndex: data.length - 1 })
    }
  })
  // useEffect(() => {
  //   //关于滚动
  //   const bs = new BScroll('.sta_showMain', {
  //     pullUpLoad: true,
  //     scrollbar: true,
  //     pullDownRefresh: true
  //   })
  // })


  return (
    <div className="str_page sta_show">
      <NavHeader className="sta_header">
        <div data-p="header_c">护照办理</div>
      </NavHeader>

      <div className="sta_main sta_showMain" >
        <div className="sta_section">
          <div className="brief-title">
            <h1>护照办理</h1>
            <p>更新于<time>2010-01-10</time></p>
          </div>
          {/* 轮播图 */}
          <div className="focus">
            <Carousel
              dots={false}
              autoplay={true}
              infinite
              selectedIndex={slideIndex}
            >
              {data.map((val, index) => (
                <a
                  key={val + index}
                  href="###"
                  style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                >
                  <img
                    src={`http://img.hanyouwang.com/2020/0812/20200812021459161.png?v=202008201300`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      changeHeight({ imgHeight: 'auto' })
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>

          {/* 关于护照 */}
          <div className="about-con">
            <div className="about">
              <span>赴韩</span>
              <span>护照</span>
              <span>介绍</span>
            </div>
            <img className="imgF" src="http://img.hanyouwang.com/allimg/121126/10-121126142210523.jpg" alt="" />
            <p className="passport-indr">护照（passport），在英文中是口岸通行证的意思。也就是说， 护照是公民旅行通过各国国际口岸的一种通行证明，是一个国家的公民出入本国国境和到国外旅行或居留时， 由本国发给的一种证明该公民国籍和身份的合法证件。所以如果您想出国旅行，无论去哪一个国家，首先必须有一份个人护照。</p>
            <div className="tips">
              <h5>TIPS:</h5>
              <p className="passport-indr">护照是出国旅行时必不可少的证件，护照每人只可申请一本，且护照具有一定的使用期限，快到期时需要重新申请新的护照。由于护照办理需要一定时间，所以在出国前要计算好时间，提前申请护照。</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsShow;