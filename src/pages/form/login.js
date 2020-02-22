import React from 'react'
import { Card, Form, Input, Button, Icon, Checkbox, message } from "antd";
const FormItem = Form.Item
class FormLogin extends React.Component {
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
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }} onSubmit={this.handleSubmit}>
                        <FormItem>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        },
                                        {
                                            min: 5, max: 10,
                                            message: "长度不在范围"
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: '用户名必须为字母或者数字'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)

                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("userPwd", {
                                    initialValue: '',
                                    rules: [{ required: true, message: 'Please input your Password!' }]
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)

                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remeber', {
                                    valuePropName: 'checked'
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="##">忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>

                </Card>
            </div>
        );
    }
}

export default Form.create({})(FormLogin);