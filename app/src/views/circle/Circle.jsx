import React from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/circle.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';


function Circle() {
  const cricle_list = [
    {
      imgUrl: 'img/circle/recommend/recommend1.jpg',
      title: '#韩国网红打卡地#',
      id: '0001'
    },
    {
      imgUrl: 'img/circle/recommend/recommend2.jpg',
      title: '#新罗免税店#',
      id: '0002'
    },
    {
      imgUrl: 'img/circle/recommend/recommend3.webp',
      title: '#韩国美食#',
      id: '0003'
    },
    {
      imgUrl: 'img/circle/recommend/recommend4.webp',
      title: '#韩国购物#',
      id: '0004'
    }
  ];

  const cricle_everybody = [
    {
      imgUrl: '111',
      title: 'Doris',
      id: '00111'
    },
    {
      imgUrl: '666',
      title: '笨蛋泡泡',
      id: '00112'
    },
    {
      imgUrl: '777',
      title: '今朝',
      id: '00113'
    },
    {
      imgUrl: '999',
      title: 'reyzhang',
      id: '00114'
    },
    {
      imgUrl: '888',
      title: '海鸥免税店返点APP',
      id: '00115'
    },
    {
      imgUrl: '11',
      title: '海鸥免税店返点APP',
      id: '00116'
    },
    {
      imgUrl: '22',
      title: '笨蛋跑跑',
      id: '00117'
    },
    {
      imgUrl: '33',
      title: '独驴行摄',
      id: '00118'
    },
    {
      imgUrl: '44',
      title: '今朝',
      id: '00119'
    },
    {
      imgUrl: '55',
      title: 'kim',
      id: '00120'
    }
  ];
  const tabs = [
    { title: '动态' },
    { title: '好友' },
  ];
  let history = useHistory();
  let goto = (path) => {
    console.log(path);
    history.push(path)
  }
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
            extra={<span className="circle_more">更多<Icon type="right" /></span>}
          />
          <Card.Body>
            <ul className="circle_list">
              {
                cricle_list.map((item, idx) => {
                  return (<li className="circle_listItem" key={item.imgUrl} onClick={() => { goto('/circle/topic') }}>
                    <a>
                      <img src={item.imgUrl} alt="" />
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
                  return (<li className="like_scroll" key={item.imgUrl} onClick={() => { goto('/circle/details') }}>
                    <a className="like_img">
                      <img src="{item.imgUrl}" alt="" />
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
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