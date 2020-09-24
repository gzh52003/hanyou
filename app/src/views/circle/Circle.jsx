import React, { useEffect, useState } from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/circle.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';

import request from '@/network/request'


function Circle() {
  const cricle_list = [
    {
      imgUrl: 'img/circle/recommend/recommend1.jpg',
      title: '#韩国网红打卡地#',
      id: '149'
    },
    {
      imgUrl: 'img/circle/recommend/recommend2.jpg',
      title: '#韩国美食#',
      id: '19'
    },
    {
      imgUrl: 'img/circle/recommend/recommend3.webp',
      title: '#新罗免税店#',
      id: '35'
    },
    {
      imgUrl: 'img/circle/recommend/recommend4.webp',
      title: '#韩国购物#',
      id: '11'
    }
  ];

  const cricle_everybody = [
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20191023/15717963149907726497.jpg',
      title: 'Doris',
      id: '701'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20190917/oss_1568707217_687616330.jpg',
      title: '笨蛋泡泡',
      id: '1'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20190930/15698093916309432118.jpg',
      title: '今朝',
      id: '631'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20190917/15687099566125624464.jpg',
      title: 'reyzhang',
      id: '2'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20191120/15742154016731349806.jpg',
      title: '海鸥免税店返点APP',
      id: '779'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20190920/15689431912826821092.jpg',
      title: '海鸥免税店返点APP',
      id: '786'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20191121/15743227769724085919.jpg',
      title: '笨蛋跑跑',
      id: '531'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20200807/oss_159678585686338662578.jpg',
      title: '独驴行摄',
      id: '1062'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20191205/15755154209363355604.jpg',
      title: '今朝',
      id: '827'
    },
    {
      imgUrl: 'http://oss.hanyouwang.com/pic/20191104/1572866087555926517.jpg',
      title: 'kim',
      id: '741'
    }
  ];

  const tabs = [
    { title: '动态' },
    { title: '好友' },
  ];

  let history = useHistory();
  let goto = (path) => {
    // console.log(path);
    history.push(path)
  }
  // hook函数
  // useEffect(async function () {
  //   console.log(1)
  //   const data = await request.get('/circle')
  //   console.log(data)
  // })
  const [data, changeData] = useState([])

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const data = await request.get('/circle')
      // 把获取到的数据 赋值给data，useState中定义的data
      // console.log(data[0].data)
      changeData(data[0].data)
    }
    fetchData();
  }, []);

  return (
    <div className="circle">
      <NavHeader className="circle_header">
        <div data-p="header_l" onClick={() => { goto('/home') }}><Icon type="left" size="lg" style={{ marginTop: '5px' }} /></div>
        <div data-p="header_c">韩游圈</div>
        <div data-p="header_r"><Icon type="ellipsis" size="md" style={{ marginTop: '10px' }} /></div>
      </NavHeader>
      <div className="circle_main">
        {/* <SearchBar style={{ width: '100%' }} placeholder="搜索用户和动态" maxLength={8} className="circle_searchBar" /> */}
        <div className="circle_searchBar" onClick={() => { goto('/circle/search') }}>
          <input type="text" placeholder="搜索用户和动态" className="circle_input" />
          <span className="circle_search_icon"><SearchOutlined /></span>
        </div>

        <Card>
          <Card.Header
            title="推荐话题"
            extra={<span className="circle_more" onClick={()=>{goto('/circle/topicmore')}}>更多<Icon type="right" /></span>}
          />
          <Card.Body>
            <ul className="circle_list">
              {
                cricle_list.map((item, idx) => {
                  return (<li className="circle_listItem" key={item.imgUrl} onClick={() => { goto('/circle/topic/'+item.id) }}>
                    <a>
                      <img src={item.imgUrl} alt="推荐" />
                      <span>{item.title}</span>
                    </a>
                  </li>)
                })
              }
            </ul>
          </Card.Body>
        </Card>
        <WhiteSpace />
        <Card>
          <Card.Header
            title="大家都在晒"
            extra={<span className="circle_more">更多<Icon type="right" /></span>}
          />
          <Card.Body>
            <ul className="cricle_everybody">
              {
                cricle_everybody.map(item => {
                  return (<li className="like_scroll" key={item.imgUrl} onClick={() => { goto('/circle/details/'+item.id); }}>
                    <a className="like_img">
                      <img src={item.imgUrl} alt="晒图" />
                    </a>
                    <p>
                      <span className="like_name">{item.title}</span>
                      <span className="like_btn"></span>
                    </p>
                  </li>)
                })
              }
            </ul>
          </Card.Body>
        </Card>

        <WhiteSpace />
        <Tabs tabs={tabs} animated={false} useOnPan={false}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' }}>
            <ul className="circle_waterfall">
              {
                data.map(item => <li key={item.id} onClick={() => { goto('/circle/details/'+item.id) }}>
                  <div className="dynamic_img"><img src={item.cover_pic} alt="" /></div>
                  <div className="dynamic_info">
                    <p className="content">{item.content}</p>
                    <p className="tags"></p>
                    <div className="bottom">
                      <div className="left">
                        <span className="avatar">
                          <img src={item.user.avatar} alt="" />
                        </span>
                        <span className="username">{item.user.username}</span>
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

    </div>
  )
}

export default Circle;