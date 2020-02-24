import React from 'react'
import { Card, Button, Table, Input, Form, Select, Pagination } from 'antd'
import Axios from '../../axios/index'
/**
 * 条件查询 行内form表单 
 * 分页
 */
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagination: {},
            list: [],
            current: 1,
            total: 0
        }
    }
    componentDidMount() {
        this.getList()
    }
    hanldCurrange = (current, pageSize) => {
        console.log(current, 'current', pageSize, 'pageSize');
        this.setState({
            current: current
        }, () => {
            this.getList()
        })

    }
    getList = (value) => {
        console.log(value, '=条件查询=')

        let params = {
            page: this.state.current,
            city: value && value.city || '',
            username: value && value.username || ''
        }
        Axios.get('order.json', params).then(res => {
            console.log(res)
            if (res.data.code == 0) {


                let addArr = []

                for (var i = 0; i < 20; i++) {
                    let arr = JSON.parse(JSON.stringify(res.data.list));
                    arr.forEach(item => {
                        item['key'] = i
                    })
                    addArr.push(...arr)

                }

                this.setState({
                    list: addArr,
                    total: res.data.total
                })
            }
        })
    }
    handleDetail=()=>{
        window.open(`/#/common/order/detail/${2}`,'_blank')
    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        return (
            <div>
                <Card>
                    <BaseForm search={this.getList}></BaseForm>
                    <Button onClick={this.handleDetail}>订单详情</Button>
                </Card>
                <Table
                    bordered
                    pagination={this.state.pagination}
                    dataSource={this.state.list} columns={columns}
                    pagination={false} />
                <Pagination showQuickJumper defaultCurrent={this.state.current} total={this.state.total} pageSize={5} showTotal={(total, range) => `共${total} 条`} onChange={this.hanldCurrange} />
            </div>
        );
    }
}
const { Option } = Select;
class HorizontalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.search(fieldsValue)
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //         // console.log()
        //         this.props.search(values)
        //         // message.success(`${values.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${values.userPwd}`)

        //     }
        // });
    }
    reset = () => {
        this.props.form.resetFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <Form.Item label="城市">
                    {getFieldDecorator('city', {
                        rules: [{ required: false, message: 'Please select your gender!' }],
                    })(
                        <Select style={{ width: 200 }} placeholder="请选择城市">
                            <Option value="1">北京</Option>
                            <Option value="2">上海</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="用车模式">
                    {getFieldDecorator('username', {
                        rules: [{ required: false, message: 'Please input your username!' }],
                    })(
                        <Select style={{ width: 200 }} placeholder="请选择模式">
                            <Option value="1">骑行中</Option>
                            <Option value="2">停车</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit}>查询</Button>
                    <Button type="default" onClick={this.reset}>重置</Button>
                </Form.Item>
            </Form>
        );
    }
}

const BaseForm = Form.create({})(HorizontalLoginForm);
export default Order;



