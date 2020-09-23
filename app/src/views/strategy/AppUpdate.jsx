import React from "react";
import NavHeader from "@com/navHeader/NavHeader.jsx"
import "@assets/strategy/css/appUpdate.scss"
import "@assets/strategy/css/common.scss"

function AppUpdate() {
  return (
    <div className="str_page sta_app">
      <NavHeader className="sta_header">
        <div data-p="header_l" >左侧</div>
        <div data-p="header_c">中间</div>
        <div data-p="header_r">右侧</div>
      </NavHeader>

      <div className="sta_main ">
        <div className="sta_section sta_app">
          <img src="img/straImg/wap_1.jpg" alt="" />
          <img src="img/straImg/wap_2.jpg" alt="" />
          <a href="###"><img src="img/straImg/wap_3.jpg" alt="" /></a>
          <a href="###"><img src="img/straImg/wap_4_have.jpg" alt="" /></a>
          <img src="img/straImg/wap_5.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default AppUpdate;