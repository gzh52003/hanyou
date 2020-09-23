import React, { useEffect,useState } from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon, Carousel } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/cirdetails.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';

export default function Topic() {
  let history = useHistory();
  let goto = (path) => {
    history.push(path)
  }
  // let state = {
  //   data: ['1', '2', '3'],
  //   imgHeight: 176,
  // }
  const [imgHeight,changeimgH] = useState('450')
  const [data,changedata] = useState(['1', '2', '3'])

  useEffect(function () {
    // simulate img loading
    setTimeout(() => {
      changedata(
       ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      );
    }, 100);
  })

  return (
    <div className="cirdetails">
      <NavHeader className="circle_header">
        <div data-p="header_l" onClick={() => { goto('/circle') }}><Icon type="left" size="lg" style={{ marginTop: '5px' }} /></div>
        <div data-p="header_c" className="details_cen">
          <div className="name"><img src="" alt="" /></div>
          <p>笨蛋跑跑</p>
        </div>
        <div data-p="header_r">+关注</div>
      </NavHeader>
      <main>
        <div className="slideshow">
          <Carousel
            autoplay={true}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' ,height:'450'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    changeimgH('auto')
                    // this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <div className="des pd5px">
          汉江夜景~~游览船上有现场音乐会，非常有气氛，然后会路过盘浦大桥的喷泉秀，完美的夜晚
          另外，这边的夜猫子夜市又开始了！一直到10月28日。推荐盘浦汉江公园和汝矣岛处，临近江畔，气氛更加浪漫！#汉江#
        </div>
        <div className="tags pd5px"><span>#汉江</span></div>
        <div className="address pd5px">首尔汉江</div>
        <div className="time pd5px">
          <span>2020-09-17</span>
          <span>290阅读</span>
        </div>
        <div className="like_content pd5px">
          <div className="like_left">
            <img src="img/circle/nophoto.png" alt="" />
            <img src="img/circle/nophoto.png" alt="" />
            <img src="img/circle/nophoto.png" alt="" />
            <img src="img/circle/nophoto.png" alt="" />
          </div>
          <div className="like_right">
            <span></span>
            <span>8</span>
          </div>
        </div>
      </main>
      <div className="space"></div>
      <div className="comment">
        评论
      </div>
    </div>
  )
}
