import React, {Component} from 'react';
import {Avatar, Button, Icon, Input, Modal, Select} from "antd";
import qoobee from "../../images/qoobee.jpg";
import Authentication from "../Authentication";
import connect from "react-redux/es/connect/connect";


const Search = Input.Search;
const Option = Select.Option;

const optionStyle = {
    background: '#435f7a',
    color: '#f5f5f5',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option  key={i.toString(36) + i}><Avatar size={30} src={qoobee}/> {i.toString(36) + i}</Option>);
}

class HeaderRightSide extends Component {
    state = {
        UserLoading: false,
        UserVisible: false,
        GroupLoading:false,
        GroupVisible: false,
    }
    showUserModal = () => {
        this.setState({
            UserVisible: true,
        });
    }

    handleCancel = () => {
        this.setState({ UserVisible: false });
        this.setState({ GroupVisible: false });
    }

    showGroupModal = () => {
        this.setState({
            GroupVisible: true,
        });
    }

    handleChange(value) {
        console.log(`Selected: ${value}`);
    }

    render() {
        return (
            <div style={{
                height: '100px', backgroundColor: 'white',
                borderRight: '1px solid #ebebe0 ', borderBottom: '1px solid #ebebe0 '
            }} align="middle">

                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{width: 200, height: '30px', margin: '10px auto 10px'}}
                />
                <div style={{width: 200, height: '30px', margin: '10px auto 10px'}}>
                    <Button shape="circle" icon="user-add" style={{marginRight: '10px'}} onClick={this.showUserModal}></Button>
                    <Button shape="circle" icon="plus-circle" onClick={this.showGroupModal}/>
                </div>
                //add-user modal
                <Modal
                    visible={this.state.UserVisible}
                    title="Thêm bạn bè"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>HỦY</Button>,
                        <Button key="submit" type="primary" loading={this.state.UserLoading} onClick={this.handleOk}>
                            TÌM
                        </Button>,
                    ]}
                >
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Số điện thoại" />

                </Modal>
                //add-chatGroup modal
                <Modal
                    style={{height:100}}
                    visible={this.state.GroupVisible}
                    title="Tạo nhóm chat"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>HỦY</Button>,
                        <Button key="submit" type="primary" loading={this.state.GroupLoading} onClick={this.handleOk}>
                            TẠO NHÓM
                        </Button>,
                    ]}
                >
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Tên nhóm chat" />

                    <h4 style={{marginTop:'10px', marginBottom:'10px'}}>Mời Bạn bè vào trò chuyện</h4>

                    <Select
                        size="large"
                        mode="multiple"
                        onChange={this.handleChange}
                        style={{ width: '100%' }}
                    >
                        {children}
                    </Select>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state.userReducer.username);
    return {

    }
}
export default connect(
    mapStateToProps
)(HeaderRightSide);