import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
import { Menu, Tabs } from 'antd';
import { HomeOutlined, CustomerServiceOutlined, MessageOutlined, UserOutlined, CompassOutlined } from '@ant-design/icons';

import RouteWithSubRoutes from "../../components/RouteWithSubRoutes"

//对路由配置文件
import Home from "@views/home/Home"
const Circle = lazy(() => import("@views/circle/Circle.jsx"))
const Cirsearch = lazy(() => import("@views/circle/Search.jsx"))
const Cirdetails = lazy(() => import("@views/circle/Details.jsx"))
const Cirtopic = lazy(() => import("@views/circle/Topic.jsx"))
const Customer = lazy(() => import("@views/customer/Customer.jsx"))
const Profile = lazy(() => import("@views/profile/Profile.jsx"))

//对Strategy类的路由
const Strategy = lazy(() => import("@views/strategy/Strategy.jsx"))
const AppUpdate = lazy(() => import("@views/strategy/AppUpdate.jsx"))
const Lists = lazy(() => import("@views/strategy/Lists.jsx"))
const NewsShow = lazy(() => import("@views/strategy/NewsShow.jsx"))

const { TabPane } = Tabs;

//定义一个路由对象
const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/circle",
    exact:true,
    component: Circle
  },
  {
    path: "/circle/search",
    exact:true,
    component: Cirsearch
  },
  {
    path: "/circle/topic",
    exact:true,
    component: Cirtopic
  },
  {
    path: "/circle/details",
    exact:true,
    component: Cirdetails
  },
  {
    path: "/customer",
    component: Customer
  },
  {
    path: "/strategy",
    exact: true,
    component: Strategy,
    // routes: [
    //   {
    //     path: "/strategy/tt",
    //     exact: true,
    //     component: TT
    //   }
    // ]
  },
  {
    path: "/strategy/lists",
    exact: true,
    component: Lists
  },
  {
    path: "/strategy/appupdata",
    exact: true,
    component: AppUpdate
  },
  {
    path: "/strategy/newsshow",
    exact: true,
    component: NewsShow
  },
  {
    path: "/profile",
    component: Profile
  },
];

const meneList = [
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
];

// 导出一个 路由配置
export default function RouteConfig() {
  const history = useHistory()
  const location = useLocation()
  let current = "/home";
  useEffect(() => {//挂载前
    if (location.pathname === "/") {
      current = "/home"
    } else {
      current = location.pathname
    }
  }, [])

  let callback = (key) => {
    history.push(key)
  }

  return (
    < div >
      <div className="tab_menu">
        <div className="line"></div>
        <Tabs defaultActiveKey={current} onChange={callback}>
          {
            meneList.map(item => <TabPane key={item.path} tab={
              <>
                {item.icon}
                {item.text}
              </>
            } >
            </TabPane>)
          }
        </Tabs>
      </div>

      <Switch>
        {/* 匹配 对应的路由  并且向下传递子路由 */}
        { //遍历路由
          routes.map((route, i) =>
            (
              <RouteWithSubRoutes key={i} {...route} />
            )
          )
        }
      </Switch>
    </div >
  );
}

