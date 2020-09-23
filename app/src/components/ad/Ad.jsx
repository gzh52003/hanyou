import React, { useRef } from "react"
import { useHistory } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';
import "./ad.scss"


function Ad() {

  //是否显示 广告
  const isShowAd = useRef()
  const showAd = () => {
    isShowAd.current.className = "adActive"
  }
  let history = useHistory();
  const download = () => {
    history.push("/strategy/appupdata")
  }

  return (
    < div className="stra_ad" ref={isShowAd} >
      <div onClick={showAd} className="close"> <CloseOutlined className="close_icon" /> </div>
      <img src="http://m.hanyouwang.com/statics/images/mobile/72.png" alt="" />
      <div className="ad_box">
        韩国旅行 找韩游 <br />
          APP下单 门票一折起
        </div>
      <div className="download" onClick={download} >立即下载</div>
    </ div >
  )
}

export default Ad;