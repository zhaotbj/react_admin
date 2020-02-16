import React from 'react'
import moment from 'moment';
import { Card, Form, Input, Button, Icon, Checkbox, message, InputNumber, Select, Switch, DatePicker, Upload } from "antd";
const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input
class FormRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                message.success(`${values.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${values.userPwd}`)
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>


                <Card title="注册表单" >
                    <Form layout="horizontal" onSubmit={this.handleSubmit}>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)

                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator("userPwd", {
                                    initialValue: '',
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)

                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {getFieldDecorator('age', { initialValue: 18 })(<InputNumber />)}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: "2"
                                })(
                                    <Select >
                                        <Select.Option value="1">Lucy1</Select.Option>
                                        <Select.Option value="2">Lucy2</Select.Option>
                                        <Select.Option value="3">Lucy3</Select.Option>
                                        <Select.Option value="4">Lucy4</Select.Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator('hobby', { initialValue: [] })
                                (<Select mode="multiple" >
                                    <Option value="1">Lucy1</Option>
                                    <Option value="2">Lucy2</Option>
                                    <Option value="3">Lucy3</Option>
                                    <Option value="4">Lucy4</Option>
                                </Select>
                                )}
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {getFieldDecorator('isMarried', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Switch />)
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {getFieldDecorator("brith", { initialValue: moment('2015-06', 'YYYY-MM:DD') })(<DatePicker />)}
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {getFieldDecorator('address', { initialValue: "" })(<TextArea rows={2} />)}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {getFieldDecorator("auth")(
                                <Upload action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    listType='picture'
                                    >
                                    <Button>
                                        <Icon type="upload" /> Upload </Button>
                                </Upload>
                            )}
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                   <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>

                </Card>
            </div>
        );
    }
}

export default Form.create({})(FormRegister);