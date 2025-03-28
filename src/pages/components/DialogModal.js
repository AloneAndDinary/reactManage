import {Button, Modal} from "antd";
import React, {useState} from 'react';
class DialogModal extends React.Component{
  constructor(props) {
    super(props);
  }
  handleOk = () => {
    this.props.onOkHandle();
  };
  handleCancel = () => {
    this.props.setModalStatus(false);
  };
  render() {
    const {title, dialogFlag} = this.props;
    return (
      <Modal
        title={title}
        open={dialogFlag}
        cancelText='取消'
        okText='确定'
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        {this.props.children}
      </Modal>
    )
  }
}
export default DialogModal;





