import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar, Row, Col} from 'antd';
import Conversations from './Conversations/Conversations';
import '../css/Sides/leftSide.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.min';

import qoobee from '../images/qoobee.jpg';

const leftStyle = {
    overflow: 'auto', height: '100vh', position: 'fixed', left: 0, width: '80px', background: '#ffdde1',
};
const rightStyle = {
    height: '100vh', marginLeft: '79px', width:'90%', backgroundColor: 'green',
};

const sideStyle = {
    height: '100vh',  left: '0%',width:'30%', backgroundColor: 'red',
}

class Side extends Component {
    constructor() {
        super();
        this.state = {
            messageDisplay: 'block',
            conversationDisplay: 'none',
        }
    }

    showMessage = () => {
        this.setState({messageDisplay: 'block'});
        this.setState({conversationDisplay: 'none'});
    }

    showConversation = () => {
        this.setState({messageDisplay: 'none'});
        this.setState({conversationDisplay: 'block'});
    }

    render() {
        return (
            <Layout style={sideStyle} class="sideStyle">
                <Layout style={leftStyle}>

                    <header style={{height:'70px',marginTop:'0',padding:'10px' }} >
                        <Avatar size={60} src={qoobee} />
                    </header>

                    <Menu inlineCollapsed={true} mode="inline" defaultSelectedKeys={['1']} style={{
                        height: '100%',
                        backgroundColor: '#ffdde1', marginTop: '50%'
                    }}>
                        <Menu.Item key="1"  onClick={this.showMessage} >
                            <Icon type="mail" style={{ fontSize: '20px'}}/>
                            <span>Tin nhắn</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.showConversation}>
                            <Icon type="team" style={{ fontSize: '20px'}}/>
                            <span>Danh bạ</span>
                        </Menu.Item>
                    </Menu>
                    <Menu inlineCollapsed={true} mode="inline" defaultSelectedKeys={['3']}>
                        <Menu.Item key="3">
                            <Icon type="setting"/>
                            <span>Cài đặt</span>
                        </Menu.Item>
                    </Menu>

                </Layout>

                <Layout style={rightStyle}
                >
                    <Conversations messageDisplay={this.state.messageDisplay}
                                    conversationDisplay={this.state.conversationDisplay}
                    />

                </Layout>
            </Layout>
        );
    }
}

export default Side;