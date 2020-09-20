import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import "@/App.scss"
import { withRouter, Switch, Route } from "react-router-dom"
import { Menu, Tabs } from 'antd';
import { HomeOutlined, CustomerServiceOutlined, MessageOutlined, UserOutlined, CompassOutlined } from '@ant-design/icons';
import store from "./store/index"
import { connect } from 'react-redux'


import Home from "@views/home/Home"
const Circle = lazy(() => import("@views/circle/Circle.jsx"))
const Customer = lazy(() => import("@views/customer/Customer.jsx"))
const Profile = lazy(() => import("@views/profile/Profile.jsx"))
const Strategy = lazy(() => import("@views/strategy/Strategy.jsx"))

const { TabPane } = Tabs;

@withRouter
@connect()
class App extends React.Component {
  state = {
    meneList: [
      {
        name: "home",
        text: "首页",
        path: "/home",
        icon: <HomeOutlined />,
      },
      {
        name: "customer",
        text: "客服",
        path: "/customer",
        icon: <CustomerServiceOutlined />
      },
      {
        name: "circle",
        text: "圈子",
        path: "/circle",
        icon: <MessageOutlined />
      }, {
        name: "strategy",
        text: "攻略",
        path: "/strategy",
        icon: <CompassOutlined />
      },
      {
        name: "profile",
        text: "我的",
        path: "/profile",
        icon: <UserOutlined />
      }
    ],
    current: "/home",
  }

  // handleClick = () => {
  //   console.log(1);
  // }
  callback = (key) => {
    this.setState = {
      current: key
    }
    this.props.history.push(key)
    //这是测试的
    this.props.dispatch({ type: "login", user: 123 })
    this.props.dispatch({ type: "get_user_async", userid: 1111 })
  }

  render() {
    console.log("我是测试的app", this.props);
    const { current, meneList } = this.state
    return (
      <div className="App">
        <div className="tab_menu ">
          <div className="line"></div>
          <Tabs defaultActiveKey={current} onChange={this.callback}>
            {
              meneList.map(item => <TabPane key={item.path} tab={
                <>
                  {item.icon}
                  {item.text}
                </>
              } >
              </TabPane>)
            }

            {/* <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
              </TabPane> */}
          </Tabs>
        </div>


        <Suspense fallback="..." >
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/circle" component={Circle}></Route>
            <Route path="/customer" component={Customer}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/strategy" component={Strategy}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Suspense>

      </div>
    );
  }
}

export default App;