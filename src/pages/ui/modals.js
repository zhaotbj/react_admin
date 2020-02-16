import React from 'react'
import { Modal, Button } from 'antd';
class Modals extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
        </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;