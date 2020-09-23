import React, { useEffect } from "react"
import { useHistory, Switch, Route } from "react-router-dom";
import { SearchBar, Card, Icon, NavBar } from 'antd-mobile';
import '@/assets/circle/cirsearch.scss'
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'

function Search() {
  let history = useHistory();
  let goto = (path) => {
    console.log(path);
    history.push(path)
  }
  useEffect(function () {
    // autoFocusInst.focus();
  })

  return (
    <div className="cirsearch">
      <NavBar
        mode="light"
        icon={<Icon type="left" style={{color:"#333"}}/>}
        onLeftClick={() => goto('/circle')}
      >
        <input type="text" className="ipt" />
        <SearchOutlined size="md" className="searchIcon" />
      </NavBar>
      <div className="main-content">
        <div className="circle_history">
          <span className="search-common-title">历史搜索</span>
          <DeleteOutlined size="md" />
        </div>
        <div className="history_content">
          <span>123414312432143214231432143214321431243214</span>
          <span>首尔</span>
        </div>
      </div>
      <div className="extra_data">
        <div className="hot-content">
          <p className="search-common-title">热门搜索</p>
          <div className="hot_content">
            <span>兼职</span>
            <span>首尔林</span>
            <span>奋斗在韩国</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search