import React, { useEffect, useState } from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon, Carousel } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/cirdetails.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';

import request from '@/network/request'


export default function Details(props) {
  // console.log("props",props)
  let history = useHistory();
  let goto = (path) => {
    history.push(path)
  }
  const tabs = [
    { title: '最新' },
    { title: '最赞' },
  ];

  const [detailsData, changeDetailsData] = useState([])
  useEffect(() => {
    // console.log(props.match.params.id)
    const id = props.match.params.id
    async function fetchData() {
      // You can await here
      const userData = await request.get('/circle/recommend/' + id)
      // 把获取到的数据 赋值给data，useState中定义的data
      // console.log(userData)
      changeDetailsData(userData)
    }
    fetchData();
  }, []);

  const [newData, changeNewData] = useState([])
  useEffect(() => {
    // console.log(props)
    const id = props.match.params.id
    async function fetchData() {
      // You can await here
      const newdata = await request.get('/circle/topic_new')
      // 把获取到的数据 赋值给data，useState中定义的data
      // console.log(data)
      changeNewData(newdata)
    }
    fetchData();
  }, []);



  // 轮播图
  // let state = {
  //   data: ['1', '2', '3'],
  //   imgHeight: 176,
  // }

  const [imgHeight, changeimgH] = useState('350')
  // const [data, changedata] = useState(['1', '2', '3'])
  useEffect(function () {
    // simulate img loading
    setTimeout(() => {
      // changedata(
      //   ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      // );
    }, 100);
  })

  return (
    <div className="cirdetails">
      {
        detailsData.map(item => {
          return (
            <div key={item.id}>
              <NavHeader className="circle_header">
                <div data-p="header_l" onClick={() => { goto('/circle') }}><Icon type="left" size="lg" style={{ marginTop: '5px' }} /></div>
                <div data-p="header_c" className="details_cen">
                  <div className="name"><img src={item.user.avatar} alt="" /></div>
                  {
                    item.user.nickname
                      ?
                      <p>{item.user.nickname}</p>
                      :
                      <p>{item.user.username}</p>
                  }
                </div>
                <div data-p="header_r">+关注</div>
              </NavHeader>
              <main>
                <div className="slideshow">
                  <Carousel
                    autoplay={true}
                    infinite
                  // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  // afterChange={index => console.log('slide to', index)}
                  >
                    {
                      item.pics_arr.map(val => (
                        <img
                          key={item.id}
                          src={val.tburl}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top', height: '350' }}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            changeimgH('auto')
                            // this.setState({ imgHeight: 'auto' });
                          }}
                        />
                      ))}
                  </Carousel>
                </div>
                <div className="des pd5px">
                  {item.content}
                  {/* 汉江夜景~~游览船上有现场音乐会，非常有气氛，然后会路过盘浦大桥的喷泉秀，完美的夜晚
                  另外，这边的夜猫子夜市又开始了！一直到10月28日。推荐盘浦汉江公园和汝矣岛处，临近江畔，气氛更加浪漫！#汉江# */}
                </div>
                <div className="tags pd5px"><span>#汉江</span></div>
                <div className="address pd5px">{item.location}</div>
                <div className="time pd5px">
                  <span>2020-09-17</span>
                  <span>{item.click}阅读</span>
                </div>
                <div className="like_content pd5px">
                  <div className="like_left">
                    {
                      item.applauds instanceof Array
                        ?
                        item.applauds.map(itemApplauds => {
                          return (
                            <img src={itemApplauds.avatar} alt="" key={itemApplauds.id} />
                          )
                        })
                        :
                        <>
                          <img src="img/circle/nophoto.png" alt="" />
                          <img src="img/circle/nophoto.png" alt="" />
                          <img src="img/circle/nophoto.png" alt="" />
                          <img src="img/circle/nophoto.png" alt="" />
                        </>
                    }
                  </div>
                  <div className="like_right">
                    <span></span>
                    <span>{item.applaud_count}</span>
                  </div>
                </div>
              </main>
              <div className="space"></div>
              <div className="comment">
                <div className="comment_title">
                  <span>{item.comment_count}条评论</span>
                </div>
                <div className="comment_content">
                  <ul className="comment_list">
                    {
                    item.comment_list
                    ?
                      item.comment_list.map(val=>{
                        return (
                          <li className="comment_item" key={val.id}>
                          <div className="left">
                            {/* <span>头像</span> */}
                            <img src={item.user.avatar} alt=""/>
                          </div>
                          <div className="right">
                            <div className="u_info">
                              <span>次胡萝北吗</span>
                              <span>LV.4</span>
                            </div>
                            <div className="public_time">2019-12-19</div>
                            <div className="u_comment">{val.content}</div>
                          </div>
                        </li>
                        )
                      })
                      :
                      <div></div>
                    }
                    {/* <li className="comment_item">
                      <div className="left">
                        
                        <img src="123" alt=""/>
                      </div>
                      <div className="right">
                        <div className="u_info">
                          <span>次胡萝北吗</span>
                          <span>LV.4</span>
                        </div>
                        <div className="public_time">2019-12-19</div>
                        <div className="u_comment">释迦果</div>
                      </div>
                    </li>
                    <li className="comment_item">
                      <div className="left">
                     
                        <img src="123" alt=""/>
                      </div>
                      <div className="right">
                        <div className="u_info">
                          <span>次胡萝北吗</span>
                          <span>LV.4</span>
                        </div>
                        <div className="public_time">2019-12-19</div>
                        <div className="u_comment">释迦果</div>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          )
        })
      }
      <div style={{ width: "100%", height: "10px", backgroundColor: '#f6f6f6' }}></div>
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
