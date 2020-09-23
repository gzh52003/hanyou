import React from "react"
import { Route } from "react-router-dom"
// 对子路由的 解析 route为传递的参数值！
function RouteWithSubRoutes(route) {
  // console.log("我是子", route);
  return (
    <Route
      path={route.path}
      // 根据不同的组件渲染！
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;