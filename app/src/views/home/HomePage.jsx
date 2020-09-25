
import request from "@/network/request";
import React from "react"
import { NavBar, Icon } from 'antd-mobile';
import "./scss/homepage.scss"
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            datas: []
        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        let { data } = await request.get("/home/homepage/" + id)
        data = data[0]
        // console.log(data)
        this.setState({
            list: data
        })
        console.log(this.state)
        let data1 = []
        let obj = this.state.list.setting
        for (let key in obj) {
            data1.push(obj[key])
        }
        data1 = data1[0]
        console.log(data1)
        this.setState({
            datas: data1
        })

    }
    render() {
        const { list, datas } = this.state

        console.log(list)
        console.log(datas)

        return (
            <div style={{position:"relative"}}>
                <NavBar
                style={{position:"absolute"}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {return this.props.history.push("/home")}}
                    rightContent={[
                       
                        <Icon key="1" type="ellipsis" />,
                    ]}
                ></NavBar>
                <div><img src={datas.imageurl} alt="" style={{ width: "100%", height: "281px" }} /></div>
                <div>
                    <div style={{ color: "#333", fontSize: "17px", fontWeight: "700", margin: "12px 15px" }}>{list.name}</div>
                    <div style={{ color: "#e74f4f", fontSize: "19px", fontWeight: "700", margin: "0 15px" }}>CNY{datas.price}</div>
                    <div style={{ color: "#999", fontSize: "14px", margin: "5px 15px", textAlign: "right" }}>{list.id}人已买</div>
                </div>
            </div>
        )
    }
}






export default HomePage;