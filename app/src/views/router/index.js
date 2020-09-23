import React, {
  Suspense,
  lazy,
  useParams
} from 'react';
import Home from "@views/home/Home"
const Circle = lazy(() => import("@views/circle/Circle.jsx"))
const Customer = lazy(() => import("@views/customer/Customer.jsx"))
const Profile = lazy(() => import("@views/profile/Profile.jsx"))
const Strategy = lazy(() => import("@views/strategy/Strategy.jsx"))

const RouterRule = [{
  // 设置根路径
  path: '/',
  component: () => import('./pages/IndexPage'),
  model: [], //引入./models/global.js中state状态信息,通过subRoutes.js传递给到Indexpage.js中使用
  routes: [ //其它路由
    {
      path: "/home",
      component: () => import('./pages/Home'),
      redirect: true, //重定向跳转
      model: [import('./models/home')],
      isAuthority
    },
    {
      path: "/about",
      component: () => import('./pages/About'),
      model: [],
      isAuthority,
      routes: [ //二级路由
        {
          path: '/about/history',
          model: [],
          component: () => import('./pages/About/History.js')
        },
        {
          path: '/about/contact',
          model: [],
          component: () => import('./pages/About/Contact.js')
        },
        {
          path: '/about/orderingguide',
          model: [],
          component: () => import('./pages/About/OrderingGuide.js')
        },
        {
          path: '/about/delivery',
          model: [],
          component: () => import('./pages/About/Delivery.js')
        },
      ]
    },

    {
      path: "/register",
      component: () => import('./pages/User/Register'),
      model: [],
    },
  ]
}]


export default RouterRule;