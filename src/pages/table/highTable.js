import React, { Component } from 'react';
import {Card, Table, Modal, Badge, Button} from 'antd'
// import Axios from '../../axios/index'
// import Utils from '../../utils/utils' // 分页配置
/**
 * 1. y轴固定 scroll={{y:240}}
 * 2. x轴固定  scroll={{x:}} 每一列加起来的宽度在加10px 每一个clo设置宽
 */
class HeighTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            list3:[]
         }
    }
    componentDidMount(){
        
        let arr = []
        for(var  i=0; i< 20; i++){
            let obj = {"name":"胡彦斌","age":32,"sex":1,"hobby":"1","address":"西湖区湖底公园1号"}
            obj['key']=i;
            obj.hobby=i
            obj.age= Math.floor(Math.random()*100)
            arr.push(obj)
        }
        this.setState({
            list:arr,
            list3:arr.splice(0,10)
        })
    }
    handleDelete=(row)=>{
        console.log(row)
    }
    render() { 
        const columns =[
            {
                title: '姓名',
                dataIndex: 'key',
                key: 'key',
                width:100
              },
            {
                title: '姓名',
                dataIndex: 'name',
                
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex){
                    return sex==1? '男': '女'
                }
              },
              {
                title: '爱好',
                dataIndex: 'hobby',
                key: 'hobby',
                render(value){
                    let obj={
                        "1":'吃饭',
                        "2":"睡觉",
                        "3":"写代码"
                    }
                    return obj[value]
                }
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
        ]
        const columns2 =[
            {
                title: '姓名',
                dataIndex: 'key',
                key: 'key',
                width:80,
                fixed:true
              },
            {
                title: '姓名',
                dataIndex: 'name',
                
                width:80,
                fixed:true
              },{
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },{
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },{
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },
              {
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },
              {
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },
              {
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },
              {
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },
              {
                title: '姓名',
                dataIndex: 'name',
                
                width:80
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:80
              },
              {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex){
                    return sex==1? '男': '女'
                },
                width:80
              },
              {
                title: '爱好',
                dataIndex: 'hobby',
                key: 'hobby',
                width:100,
                render(value){
                    let obj={
                        "1":'吃饭',
                        "2":"睡觉",
                        "3":"写代码"
                    }
                    return obj[value]
                }
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:120
              },
        ]
        const columns3=[
            {
                title: '姓名',
                dataIndex: 'key'
              },
            {
                title: '姓名',
                dataIndex: 'name'
              },
              {
                title: '爱好',
                dataIndex: 'hobby',
                render(value){
                    let obj={
                        "1":<Badge status="success" text="success"/>,
                        "2":<Badge status="error" text="error"/>,
                        "3":<Badge status="default" text="default"/>,
                        "4":<Badge status="processing" text="processing"/>,
                        "5":<Badge status="warning" text="warning"/>
                    }
                    return obj[value]
                }
              },
              {
                title: '年龄',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortDirections: ['descend', 'ascend']
              },
              {
                title: '操作',
                render:(text,item)=> this.state.list3.length>=1? <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>:null
            }
        ]
        return ( 
            <div>
                 <Card title="头部固定">
                <Table 
                bordered
                scroll={{y:240}}
                dataSource={this.state.list} columns={columns}
                pagination={false}/>;
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.list}
                        pagination={false}
                        scroll={{ x:1200  }} 
                    />
                </Card>
                <Card title="排序">
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.list3}
                        pagination={false}
                    />
                </Card>
            </div>
         );
    }
}
 
export default HeighTable;