import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import "./navHeader.scss"

import { LeftOutlined, EllipsisOutlined, HomeOutlined, StarOutlined, SaveOutlined } from '@ant-design/icons';

function NavHeader(props) {

  const history = useHistory()
  const goback = () => {
    history.goBack()
  }

  const isShow = useRef()
  const show = () => {
    if (isShow.current.className === "show-box showAvtive") {
      console.log(1);
      isShow.current.className = "show-box"
    } else {
      console.log(22);
      isShow.current.className = "show-box showAvtive"
    }
  }

  let headerL, headerC, headerR;
  let newArr = []
  if (props.children instanceof Array === false) {
    newArr.push(props.children)
    getInfo(newArr)
  } else {
    getInfo(props.children)
  }

  function getInfo(info) {
    info.forEach((item, index) => {
      if (item.props["data-p"] === "header_l") {
        headerL = item
      } else if (item.props["data-p"] === "header_c") {
        headerC = item
      } else if (item.props["data-p"] === "header_r") {
        headerR = item
      }
    })
  }

  const gotoPage = (path) => {
    history.push(path)
  }

  const pageDate = [
    {
      id: 1,
      title: "韩游首页",
      icon: <HomeOutlined />,
      path: "/home"
    }, {
      id: 2,
      title: "我的收藏",
      icon: <StarOutlined />,
      path: "/sc"
    }, {
      id: 3,
      title: "我的订单",
      icon: <SaveOutlined />,
      path: "/dd"
    }
  ]

  return (
    <div className="nav_header" >
      <div className="line"></div>
      <div className="header_l" onClick={goback}>

        {
          headerL ? headerL : <LeftOutlined />
        }
      </div>
      <div className="header_c">
        {
          headerC
        }
      </div>
      <div className="header_r" onClick={show}>
        {
          headerR ? headerR : <EllipsisOutlined />
        }
        <ul className="show-box" ref={isShow}>
          {
            pageDate.map(item => {
              return (
                <li key={item.id} onClick={gotoPage.bind(null, item.path)}>{item.icon} {item.title}</li>
              )
            })
          }
        </ul>
      </div>
    </div >
  )
}

export default NavHeader;