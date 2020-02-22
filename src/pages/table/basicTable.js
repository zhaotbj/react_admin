import React, { Component } from 'react';
import {Card, Table, Modal, message, Button,Pagination } from 'antd'
import Axios from '../../axios/index'
import Utils from '../../utils/utils' // 分页配置
/**
 * 1. 表格 单选  字典匹配
 * 2。 表格多选 
 * 2。 分页 组件 和导入配置分页
 */
class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedRowKeys:'',
            selectedRows:[],
            selectedItem:{},
            list:[], // 
            pagination:{},
            // 组件式分页
            current:1,
            total:10
         }
    }
    // 引入配置分页
    params={
        page:1
    }
    onRowClick=(row,index) =>{
        console.log(row,'row', index)
        Modal.info({
            title:'提示',
            content:"用户名："+row.name
        })
        this.setState({
            selectedRowKeys:[index],
            selectedItem:row
        })
    }
    delete=()=>{
        let row = this.state.selectedRows;
        let ids= []
        row.map(item=>{
            ids.push(item.key)
        })
        Modal.confirm({
            title:"删除提示",
            content:`确定要删除${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功')
            }
        })
    }
    componentDidMount(){
       this.getList()
    }
    getList=()=>{
        Axios.get('/table.json', {currentPage:this.params.page}).then(res=>{
            console.log(res)
            if(res.data.code===0){
                this.setState({
                    list:res.data.list,
                    pagination: Utils.pagination(res.data,(current)=>{
                        this.params.page=current
                        this.getList()
                    })
                })
            }
        })
    }
    onChange=(page, pageSize)=>{
        console.log(page, pageSize)
    }
    render() { 
        const columns =[
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
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
        const dataSource=[
                {
                key: 0,
                name: '胡彦斌',
                age: 32,
                sex:1,
                hobby:"1",
                address: '西湖区湖底公园1号',
              },
              {
                key: 1,
                name: '胡彦祖',
                age: 42,
                sex:2,
                hobby:"3",
                address: '西湖区湖底公园1号',
              },
        ];
        // 单选框
        const rowSelection ={
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys // 选中的行
        }
        const rowCheckBoxSelection= {
            type:"checkbox",
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                console.log(selectedRowKeys, 'keys', selectedRows, 'row') // 选中的每一行的索引，
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }

        }
        
        return (  
            <div>
                <Card title="基础表格">
                <Table dataSource={dataSource} columns={columns} />;
                </Card>
                <Card title="单选---表格">
                <Table 
                bordered
                rowSelection={rowSelection}
                onRow={(record,index) =>{
                    return {
                        onClick: ()=>this.onRowClick(record,index)
                    }
                }}
                dataSource={dataSource} columns={columns} />;
                </Card>
                <Card title="多选---表格"> <Button onClick={this.delete}>删除</Button>
                <Table 
                bordered
                rowSelection={rowCheckBoxSelection}
                dataSource={this.state.list} columns={columns}
                pagination={false}/>;
                {/* 组件分页 */}
                <Pagination showQuickJumper defaultCurrent={this.state.current} total={this.state.total}  pageSize={5} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} onChange={this.onChange} />
                </Card>
                <Card title="分页---表格">
                    {/* 配置分页 */}
                <Table 
                bordered
                pagination={this.state.pagination}
                dataSource={this.state.list} columns={columns} />;
                </Card>
            </div>
        );
    }
}
 
export default BasicTable;