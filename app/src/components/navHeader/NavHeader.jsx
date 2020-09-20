import React from "react"
// import "@assets/strategory/strategory.scss"
import "./navHeader.scss"

class NavHeader extends React.Component {

  render() {
    let headerL, headerC, headerR;
    this.props.children.forEach((item, index) => {
      if (item.props["data-p"] === "header_l") {
        headerL = item
      } else if (item.props["data-p"] === "header_c") {
        headerC = item
      } else if (item.props["data-p"] === "header_r") {
        headerR = item
      }
    })
    return (
      <div className="nav_header" >
        <div className="line"></div>
        <div className="header_l">
          {
            headerL
          }
        </div>
        <div className="header_c">
          {
            headerC
          }
        </div>
        <div className="header_r">
          {
            headerR
          }
        </div>
      </div >
    )
  }
}

export default NavHeader;