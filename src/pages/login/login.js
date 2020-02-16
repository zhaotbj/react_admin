import React from 'react'
import {  Form, Input, Button } from "antd";
import './style.scss'
const FormItem = Form.Item
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: ""
        }
    }
    loginSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            window.location.href = '/#/admin';
          }
        });
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-page">
                <div className="box">
                    <Form className="login-form">
                        <FormItem label="用户名">
                            {getFieldDecorator('username', {
                                initialValue: 'admin',
                                rules: [{ validator: this.checkUsername }]
                            })(
                                <Input placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                initialValue: 'admin',
                                rules:  [
                                    {
                                      required: true,
                                      message: 'Please input your password!',
                                    },
                                    {
                                      validator: this.validateToNextPassword,
                                    },
                                  ]
                            })(
                                <Input type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.loginSubmit} className="login-form-button">
                                登录
                    </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>

        );
    }
}

export default Form.create({})(Login);