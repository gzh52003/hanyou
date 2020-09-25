import React from "react"
import ReactDOM from 'react-dom';
import "./scss/home.scss"
import { Flex, WhiteSpace, Icon, Grid, Button, List, ListView } from 'antd-mobile';
import { Tabs } from 'antd-mobile';
import { SegmentedControl } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import request from "@/network/request";
function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}
// const NUM_SECTIONS = 5;
// const NUM_ROWS_PER_SECTION = 5;
// let pageIndex = 0;

// const dataBlobs = {};
// let sectionIDs = [];
// let rowIDs = [];
// function genData(pIndex = 0) {
//   for (let i = 0; i < NUM_SECTIONS; i++) {
//     const ii = (pIndex * NUM_SECTIONS) + i;
//     const sectionName = `Section ${ii}`;
//     sectionIDs.push(sectionName);
//     dataBlobs[sectionName] = sectionName;
//     rowIDs[ii] = [];

//     for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
//       const rowName = `S${ii}, R${jj}`;
//       rowIDs[ii].push(rowName);
//       dataBlobs[rowName] = rowName;
//     }
//   }
//   sectionIDs = [...sectionIDs];
//   rowIDs = [...rowIDs];
// }
class Home extends React.Component {
  constructor(props) {
    super(props);
    
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      datas: [],
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
      data: ['3', '4', '5'],
      imgHeight: 176,
    }
  }
  // }
  // state = {
  //   value: '',
  // };
  // componentDidMount() {
  //   this.autoFocusInst.focus();
  // }
  // onChange= (value) => {
  //   this.setState({ value });
  // };
  // clear = () => {
  //   this.setState({ value: '' });
  // };
  // handleClick = () => {
  //   this.manualFocusInst.focus();
  // }
  // onchange=(item,index)=>{
  //   console.log(item,index)
  // }
  componentWillMount() {
    console.log("sssss")
  
    
  }

  async componentDidMount() {
    const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}
    console.log("wwwww")
    var tag
    // 第一层tab
    var oTab = document.getElementById('tab');
    var menuli = document.getElementsByClassName("menuli")[0]
    var aLi = menuli.getElementsByTagName('li');
    var oTabBox = oTab.getElementsByTagName('div')[1];
    var aBox = oTabBox.getElementsByTagName('article');
    var Ospan = menuli.getElementsByTagName('span')
    for (var i = 0; i < aLi.length; i++) {
      aLi[i].index = i;
      aLi[i].onclick = function () {
        for (var j = 0; j < aLi.length; j++) {
          aLi[j].className = '';//取消菜单样式
          aBox[j].className = 'hide';//隐藏所有的tabDiv
          Ospan[j].className = ""
        }
        aLi[this.index].className = 'selected';
        aBox[this.index].className = '';
        Ospan[this.index].className = "highColor"
      }
    }
    // 第二层tab的tab1

    var oTab1 = document.getElementById('tabsub1');
    var menuli1 = oTab1.getElementsByClassName("menuli1")[0]
    var aLi1 = menuli1.getElementsByTagName('li');
    var oTabBox1 = oTab1.getElementsByTagName('div')[1];
    var aBox1 = oTabBox1.getElementsByTagName('section');
    var Ospan1 = menuli1.getElementsByTagName('span')
    for (var i = 0; i < aLi1.length; i++) {
      aLi1[i].index = i;
      aLi1[i].onclick = async (e) => {
        let event = e.currentTarget
        for (var j = 0; j < aLi1.length; j++) {
          aLi1[j].className = '';//取消菜单样式
          aBox1[j].className = 'hide1';//隐藏所有的tabDiv
          Ospan1[j].className = ""
        }
        aLi1[event.index].className = 'selected1';
        aBox1[event.index].className = '';
        Ospan1[event.index].className = "highColor1"
        tag = event.innerText
        let { data } = await request.get("/home/lists", {
          tag: tag
        })
        data = data[0].data.poster
        this.setState({
          datas: data
        })

      }
    }
    // // 第二层tab的tab2
    var oTab2 = document.getElementById('tabsub2');
    var menuli2 = oTab2.getElementsByClassName("menuli1")[0]
    var aLi2 = menuli2.getElementsByTagName('li');
    var oTabBox2 = oTab2.getElementsByTagName('div')[1];
    var aBox2 = oTabBox2.getElementsByTagName('section');
    var Ospan2 = menuli2.getElementsByTagName('span')
    for (var i = 0; i < aLi2.length; i++) {
      aLi2[i].index = i;
      aLi2[i].onclick = async (e) => {
        let event = e.currentTarget
        console.log(event)
        console.log(this)
        for (var j = 0; j < aLi2.length; j++) {
          aLi2[j].className = '';//取消菜单样式
          aBox2[j].className = 'hide1';//隐藏所有的tabDiv
          Ospan2[j].className = ""
        }
        aLi2[event.index].className = 'selected1';
        aBox2[event.index].className = '';
        Ospan2[event.index].className = "highColor1"
        tag = event.innerText
        let { data } = await request.get("/home/lists", {
          tag: tag
        })
        data = data[0].data.poster
        this.setState({
          datas: data
        })

      }
    }
    // 初始化
    let { data } = await request.get("/home/lists", {
      tag: "全部"
    })

    data = data[0].data.poster
    // console.log(data)
    // console.log(res1[0].setting[1].imageurl)
    this.setState({
      datas: data
    })



    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
        height: hei,
      });
    }, 600);
  }
  // onEndReached = (event) => {
  //   // load new data
  //   // hasMore: from backend data, indicates whether it is the last page, here is false
  //   if (this.state.isLoading && !this.state.hasMore) {
  //     return;
  //   }
  //   // console.log('reach end', event);
  //   this.setState({ isLoading: true });
  //   setTimeout(() => {
  //     genData(++pageIndex);
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
  //       isLoading: false,
  //     });
  //   }, 1000);
  // }
  // 点击跳转
  goto = (id)=>{
    this.props.history.push('/home/homepage/'+id)
}
  render() {
    const { datas } = this.state
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    // let index = datas.length - 1;
    // const row = (rowData, sectionID, rowID) => {
    //   if (index < 0) {
    //     index = datas.length - 1;
    //   }
    //   const obj = datas[index--];
    let index = 0
    const row = (rowData, sectionID, rowID) => {
      if (index > datas.length - 1) {
        index = 0;
      }
      const obj = datas[index++];
      return (
        <div key={rowID} onClick={this.goto.bind(this,obj.id)}>

          <div style={{ padding: '15px 0' }}>
            <img style={{ height: '188px', marginBottom: '15px', width: "100%" }} src={obj.setting[1].imageurl} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ margin: "0 15px", fontSize: "17px", marginBottom: '8px', }}>{obj.name}</div>
              <div><span style={{ fontSize: '14px', color: '#666', margin: "0 15px", lineHeight: "21px", display: "block" }}>{obj.setting[1].alt}</span></div>
            </div>
          </div>
        </div>
      );
    };

    const PlaceHolder = ({ className = '', ...restProps }) => (
      <div className={`${className} placeholder`} {...restProps}>111</div>
    );

    return (
      <div style={{ height: "2000px" }}>
        {/* 搜索框 */}
        <header className="headerbox">
          <div className="header-con">
            <span>
              <img src="img/home/home1.png" alt="" />
            </span>
            <div className="serchinput">
              <input type="text" placeholder="目的地/景点" />
            </div>
          </div>
          <a href="" className="header-R">
            <img src="img/home/home2.png" alt="" />
          </a>
        </header>
        {/* 轮播图 */}
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`img/home/home${val}.jpg`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>

        <div className="flex-container" style={{ background: `#fff` }}>
          <Flex justify={"around"} align={"start"} >
            <Flex.Item style={{ marginLeft: `8px` }}><em className="icon1" style={{ backgroundImage: `url(./img/home/index-tool-icon.png)` }}></em><span>地图</span><Flex.Item><span className="span1">Map of Korea</span></Flex.Item></Flex.Item>
            <Flex.Item><em className="icon2" style={{ backgroundImage: `url(./img/home/index-tool-icon.png)` }}></em><span>地铁</span><Flex.Item><span className="span1">Subway in Korea</span></Flex.Item></Flex.Item>
            <Flex.Item><em className="icon3" style={{ backgroundImage: `url(./img/home/index-tool-icon.png)` }}></em><span>汇率</span><Flex.Item><span className="span1">Exchange rate</span></Flex.Item></Flex.Item>
            <Flex.Item><em className="icon4" style={{ backgroundImage: `url(./img/home/index-tool-icon.png)` }}></em><span>天气</span><Flex.Item><span className="span1">Weather in Korea</span></Flex.Item></Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
        </div>




        <Flex wrap="wrap" justify={"around"} style={{ background: `#fff` }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-1 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>景点门票</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-2 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>公共演唱会</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-3 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>WIFI电话卡</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-4 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>交通卡</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-5 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>优惠券</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-6 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>火车票</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-7 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>一日游</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "25%", minWidth: "25%", paddingTop: "12px" }}>
            <p className="icon1-8 iconf" style={{ backgroundImage: `url(./img/home/home_merge.png)` }}></p>
            <span style={{ textAlign: "center" }}>免税店</span>
          </div>


        </Flex>
        <div style={{ background: `#fff`, height: "17px" }}></div>

        <Flex wrap="wrap" justify={"around"} style={{ background: `#fff` }} className="flex1">
          <div className="div1">
            <span className="icon2-1 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">美食</span>
          </div>
          <div className="div1">
            <span className="icon2-2 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">景点</span>
          </div>
          <div className="div1">
            <span className="icon2-3 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">购物</span>
          </div>
          <div className="div1">
            <span className="icon2-4 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">超级特惠</span>
          </div>
          <div className="div1">
            <span className="icon2-5 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">游记</span>
          </div>
          <div className="div1">
            <span className="icon2-6 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">资讯</span>
          </div>
          <div className="div1">
            <span className="icon2-7 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">来韩必备</span>
          </div>
          <div className="div1">
            <span className="icon2-8 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">时尚</span>
          </div>
          <div className="div1">
            <span className="icon2-9 iconf2" style={{ backgroundImage: `url(./img/home/nav_small_merge.png)` }}></span>
            <span className="span2">交通</span>
          </div>


        </Flex>

        <section className="home_coupon_new">
          <div className="home-title">
            <h3>热门优惠券</h3>
            <a href="">更多</a>
            <Icon type={"right"} className="iconRight" size={"xs"} />
          </div>
          <ul>

            <li>
              <a href="">
                <div><img src="img/home/home6.jpg" alt="" /></div>
                <div>
                  <h3> 韩国免税店优惠券汇总</h3>
                  <span style={{ color: "#999", fontSize: "12px", margin: "5px 0" }}>新罗免税店、现代百货免税店优惠券应有尽有！</span>
                  <p style={{ color: "#e74f4f" }}>新罗免税店、现代百货免税店优惠券应有尽有！</p>
                </div>
                <div className="home_coupon_new_p">
                  <p className="iconb">
                    <b>去领取</b>
                    <Icon type={"right"} className="iconRight2" size={"xs"} />
                  </p>
                  <span style={{ color: "#888" }}>已领9.81W</span>
                </div>
              </a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a href="">
                <div><img src="img/home/home7.png" alt="" /></div>
                <div>
                  <h3> 现代百货免税店（贸易中心店&东大门店）优惠券</h3>
                  <span style={{ color: "#999", fontSize: "12px", margin: "5px 0" }}>自由行顾客尊享礼遇：当日$1以上购买时，即赠代言人迷你镜；购满$1000以上可享150,000韩元优惠卷；购满$700以上可享105,000韩元优惠卷；购满$500以上可享75,000韩元优惠卷；购满$300以上可享45,000韩元优惠券；购满$200以上可享30,000韩元优惠券；购满$100以上可享15,000韩元优惠券；购满$20以上可享5,000韩元优惠券！</span>
                  <p style={{ color: "#e74f4f" }}>自由行顾客尊享礼遇：当日$1以上购买时，即赠代言人迷你镜；购满$1000以上可享150,000韩元优惠卷；购满$700以上可享105,000韩元优惠卷；购满$500以上可享75,000韩元优惠卷；购满$300以上可享45,000韩元优惠券；购满$200以上可享30,000韩元优惠券；购满$100以上可享15,000韩元优惠券；购满$20以上可享5,000韩元优惠券！</p>
                </div>
                <div className="home_coupon_new_p">
                  <p className="iconb">
                    <b>去领取</b>
                    <Icon type={"right"} className="iconRight2" size={"xs"} />
                  </p>
                  <span style={{ color: "#888" }}>已领4.79W</span>
                </div>
              </a>
            </li>
          </ul>
        </section>

        <section className="home_parts home_parts1">
          <div>
            <i className="tit t1" style={{ backgroundImage: `url(./img/home/home-title-merge.png)` }}></i>
            <div className="home_titles">
              今日推荐
        </div>
          </div>
          <ul className="clear_fix" style={{ margin: "3px" }}>
            <li><a href=""><img src="img/home/home8.png" alt="" /></a></li>
            <li><a href=""><img src="img/home/home9.jpg" alt="" /></a></li>
            <li><a href=""><img src="img/home/home10.jpg" alt="" /></a></li>
            <li><a href=""><img src="img/home/home11.png" alt="" /></a></li>
            <li><a href=""><img src="img/home/home12.jpg" alt="" /></a></li>
          </ul>
        </section>

        <section className="home_parts home_parts2">
          <div className="home_parts_tit">
            <i className="tit t2" style={{ backgroundImage: `url(./img/home/home-title-merge.png)` }}></i>
            <div className="home_titles">
              特惠产品
        </div>
            <div className="home_parts_tits">
              <a href="">更多</a>
              <Icon type={"right"} className="iconRight" size={"xs"} />
            </div>
          </div>
          <ul className="clear_fix homeul" style={{ margin: "3px" }}>
            <li>
              <div style={{ backgroundImage: `url(./img/home/home13.jpg)` }} className="home_parts2_div1">
              </div>
              <div className="home_parts2_div2">
                <h2>爱宝乐园+往返大巴</h2>
                <span>CNY255.00</span>
              </div>
            </li>
            <li>
              <div style={{ backgroundImage: `url(./img/home/home14.jpg)` }} className="home_parts2_div1">
              </div>
              <div className="home_parts2_div2">
                <h2>乱打秀双人票</h2>
                <span>CNY425.00</span>
              </div>
            </li>


          </ul>
        </section>

        <section className="home_parts home_parts3">
          <div className="home_parts_tit">
            <i className="tit t3" style={{ backgroundImage: `url(./img/home/home-title-merge.png)` }}></i>
            <div className="home_titles">
              精彩专题
        </div>
            <div className="home_parts_tits">
              <a href="">更多</a>
              <Icon type={"right"} className="iconRight" size={"xs"} />
            </div>
          </div>
          <ul className="clear_fix homeul">
            <dl>
              <dt><img src="./img/home/home15.jpg" alt="" /></dt>
              <dd>春季京畿道2020-京畿道热门景点</dd>
            </dl>
            <dl>
              <dt><img src="./img/home/home16.jpg" alt="" /></dt>
              <dd>韩国滑雪攻略_韩国冬季旅游攻略_韩国滑雪场门票</dd>
            </dl>
            <dl>
              <dt><img src="./img/home/home17.jpg" alt="" /></dt>
              <dd>大学生冬季专题</dd>
            </dl>
          </ul>
        </section>
        <section className="home_parts home_parts4">
          <div className="home_parts_tit">
            <i className="tit t4" style={{ backgroundImage: `url(./img/home/home-title-merge.png)` }}></i>
            <div className="home_titles">
              发现更多精彩
        </div>
          </div>
        </section>


        {/* 长列表 */}
        {/* 第一层tab */}
        <section id="tab">
          <div className="tabMenu">
            <ul className="menuli clear_fix">
              <li className="selected"><span href="#" className="highColor">产品预订</span></li>
              <li><span href="#">猜你喜欢</span></li>
            </ul>
          </div>
          <div className="tab_box">

            <article>

              {/* 第二层tab1*/}
              <section id="tabsub1">
                <div className="tabMenu1">
                  <ul className="menuli1 clear_fix">
                    <li className="selected1"><span href="#" className="highColor1">全部</span></li>
                    <li><span href="#">门票</span></li>
                    <li><span href="#">公演</span></li>
                    <li><span href="#">一日游</span></li>
                    <li><span href="#">WIFI</span></li>
                    <li><span href="#">特惠</span></li>

                  </ul>
                </div>
                <div className="tab_box1">
                  <section>
                    <ListView
                      ref={el => this.lv = el}
                      dataSource={this.state.dataSource}
                      // renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      // renderSectionHeader={sectionData => (
                      //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      // )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      style={{
                        height: this.state.height,
                        overflow: 'auto',
                      }}
                      // pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
                      initialListSize={5}
                    />
                  </section>
                  <section className="hide1">
                    <ListView
                      ref={el => this.lv = el}
                      dataSource={this.state.dataSource}
                      // renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      // renderSectionHeader={sectionData => (
                      //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      // )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      style={{
                        height: this.state.height,
                        overflow: 'auto',
                      }}
                      // pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
                      initialListSize={5}
                    />

                  </section>
                  <section className="hide1">
                    <ListView
                      ref={el => this.lv = el}
                      dataSource={this.state.dataSource}
                      // renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      // renderSectionHeader={sectionData => (
                      //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      // )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      style={{
                        height: this.state.height,
                        overflow: 'auto',
                      }}
                      // pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
                      initialListSize={5}
                    />
                  </section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                </div>
              </section>


            </article>
            {/* 第二层tab2 */}
            <article className="hide">
              <section id="tabsub2">
                <div className="tabMenu1">
                  <ul className="menuli1 clear_fix">
                    <li className="selected1"><span href="#" className="highColor1">全部</span></li>
                    <li><span href="#">韩美食</span></li>
                    <li><span href="#">逛景点</span></li>
                    <li><span href="#">狂购物</span></li>
                    <li><span href="#">享时尚</span></li>
                    <li><span href="#">看游记</span></li>
                    <li><span href="#">优惠券</span></li>
                    <li><span href="#">读资讯</span></li>

                  </ul>
                </div>
                <div className="tab_box1">
                  <section>
                    <ListView
                      ref={el => this.lv = el}
                      dataSource={this.state.dataSource}
                      // renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      // renderSectionHeader={sectionData => (
                      //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      // )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      style={{
                        height: this.state.height,
                        overflow: 'auto',
                      }}
                      // pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
                      initialListSize={5}
                    />
                  </section>
                  <section className="hide1">
                    <ListView
                      ref={el => this.lv = el}
                      dataSource={this.state.dataSource}
                      // renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      // renderSectionHeader={sectionData => (
                      //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      // )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      style={{
                        height: this.state.height,
                        overflow: 'auto',
                      }}
                      // pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
                      initialListSize={5}
                    />

                  </section>
                  <section className="hide1">
                    <ListView
                      ref={el => this.lv = el}
                      dataSource={this.state.dataSource}
                      // renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      // renderSectionHeader={sectionData => (
                      //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      // )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      style={{
                        height: this.state.height,
                        overflow: 'auto',
                      }}
                      // pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
                      initialListSize={5}
                    />
                  </section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                  <section className="hide1"><ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    // renderSectionHeader={sectionData => (
                    //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    renderSeparator={separator}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    // pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    initialListSize={5}
                  /></section>
                </div>
              </section>

            </article>
          </div>
        </section>




        {/* <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        // renderSectionHeader={sectionData => (
        //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
        // )}
        renderBodyComponent={() => <MyBody />}
        renderRow={row}
        renderSeparator={separator}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        // pageSize={4}
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        initialListSize={5}
      /> */}

      </div>


    )
  }
}

export default Home;