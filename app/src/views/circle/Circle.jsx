import React from "react"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import NavHeader from "@/components/navHeader/NavHeader";
import '@/assets/circle/circle.scss'

function Circle() {
  let goto = () => {
    console.log(1);
  }
  return (
    <div className="circle">
      <NavHeader className="circle_header">
        <div data-p="header_l" onClick={goto}><span>《</span></div>
        <div data-p="header_c">圈子</div>
        <div data-p="header_r">...</div>
      </NavHeader>
      <SearchBar placeholder="Search" maxLength={8} className="circle_searchBar"/>

    </div>
  )
}

export default Circle;