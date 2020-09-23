import React, { Suspense, lazy, useParams } from 'react';
import logo from './logo.svg';
import "@/App.scss"
import { withRouter, Switch, Route } from "react-router-dom"
import { Menu, Tabs } from 'antd';
import { HomeOutlined, CustomerServiceOutlined, MessageOutlined, UserOutlined, CompassOutlined } from '@ant-design/icons';
import store from "./store/index"
import { connect } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';

import RouteConfig from "./views/router/config"

@withRouter
@connect()
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>loading</div>}>
          <RouteConfig />
        </Suspense>
      </div>
    );
  }
}

export default App;
