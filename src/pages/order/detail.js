import React from 'react';
import { Card} from 'antd'
import Axios from '../../axios/index'
import './detail.scss'
class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            detailInfo:{}
         }
    }
    componentDidMount(){
        if(this.props.match.params.id){
            this.getDetail(this.props.match.params.id)
        }
        
    }
    renderMap=(list)=>{
        var map=new window.BMap.Map("orderDetailMap");
        var point = new window.BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15) // 中心点
        // 控件
        map.addControl(new window.BMap.ScaleControl({anchor:window.BMAP_ANCHOR_TOP_RIGHT}));
        map.addControl(new window.BMap.NavigationControl({anchor:window.BMAP_ANCHOR_TOP_RIGHT}));
        // 绘制用户出行的路线图
        let startPint=''
        let endPoint=''
        if(list.length>0){
            let first = list[0]
            startPint= new window.BMap.Point(first.lon,first.lat);
            new window.BMap.Icon("/assets/start_point.png", new window.BMap.Size(36,42))


        }

    }
    getDetail(id){
        Axios.get("/orderdetail.json",{orderId:id}).then(res=>{
            console.log(res)
            if(res.data.code==0){
                this.setState({
                    detailInfo:res.data.data
                })
                this.renderMap(res.data.data.positon_list)
            }
        })
    }
    render() { 
        const info= this.state.detailInfo||{}
        return ( 
            <div>
                <Card>
                <div id="orderDetailMap" className="order-map"></div>
                <div className="detail_item">
                    <div className="item_title">基础信息</div>
                    <ul>
                        <li>
                            <div className="item_left">用车模式</div>
                            <div className="item_right">{info.mode==1?'服务区':"停车点"}</div>
                        </li>
                        <li>
                            <div className="item_left">订单编号</div>
                            <div className="item_right">{info.order_sn}</div>
                        </li>
                        <li>
                            <div className="item_left">车辆编号</div>
                            <div className="item_right">{info.bike_sn}</div>
                        </li>
                        <li>
                            <div className="item_left">用户姓名</div>
                            <div className="item_right">{info.user_name}</div>
                        </li>
                        <li>
                            <div className="item_left">手机号码</div>
                            <div className="item_right">{info.mobile}</div>
                        </li>
                    </ul>
                </div>
                <div className="detail_item">
                    <div className="item_title">行驶轨迹</div>
                    <ul>
                        <li>
                            <div className="item_left">行驶起点</div>
                            <div className="item_right">{info.start_location}</div>
                        </li>
                        <li>
                            <div className="item_left">行驶终点</div>
                            <div className="item_right">{info.end_location}</div>
                        </li>
                        <li>
                            <div className="item_left">行驶里程</div>
        <div className="item_right">{info.distance/1000}公里</div>
                        </li>
                       
                    </ul>
                </div>
                </Card>
            </div>
         );
    }
}
 
export default OrderDetail