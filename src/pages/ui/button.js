import React, { Component } from 'react';
import { Card, Button, Icon, Radio } from 'antd'
import './ui.scss'
class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option:[{ label: 'small', value: 'small' },
            { label: 'large', value: 'large' },
            { label: 'default', value: 'default' }],
            value3:'default'
        }
    }
    onChange3 = e => {
        console.log('radio3 checked', e.target.value);
        this.setState({
          value3: e.target.value,
        });
      }
    render() {
        return (
            <div>
                <Card title="基础按钮" >
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="search">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button icon="loading" type="primary">确定</Button>
                    <Button shape="circle" type="primary" loading={true}></Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" style={{ marginRight: 0 }}>
                            <Icon type="left" />
                            后退
                            </Button>
                        <Button type="primary">
                            前进
                        <Icon type="right" />
                        </Button>
                    </Button.Group>

                </Card>
                <Card title="大小按钮">
                    <Radio.Group
                        options={this.state.option}
                        onChange={this.onChange3}
                        value={this.state.value3}
                    />
                    <Button size={this.state.value3} type="primary">Primary</Button>
                    <Button size={this.state.value3} type="primary">Primary</Button>
                    <Button size={this.state.value3} type="primary">Primary</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;