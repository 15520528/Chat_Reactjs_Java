import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar, Row, Col} from 'antd';
import Conversations from '../Conversations/Conversations';
import Contacts from '../Contacts/Contacts';
import HeaderRightSide from './headerRightSide';
import 'antd/dist/antd.css';
import 'antd/dist/antd.min';

import qoobee from '../../images/qoobee.jpg';
import Authentication from "../Authentication";

const leftStyle = {
    overflow: 'auto', height: '100vh', position: 'fixed', left: 0, width: '80px', background: '#ffdde1',
};
const rightStyle = {
    height: '100vh', marginLeft: '79px', width:'80%',
};

const sideStyle = {
    height: '100vh',  left: '0%',width:'30%', backgroundColor: 'red',
}

class Side extends Component {
    constructor() {
        super();
        this.state = {
            contactDisplay: 'none',
            conversationDisplay: 'block',
        }
    }

    showContacts = () => {
        this.setState({contactDisplay: 'block'});
        this.setState({conversationDisplay: 'none'});
    }

    showConversations = () => {
        this.setState({contactDisplay: 'none'});
        this.setState({conversationDisplay: 'block'});
    }

    render() {
        // console.log('pros '+this.props.username);
        return (
            <Layout style={sideStyle} >
                <Layout style={leftStyle}>

                    <header style={{height:'70px',marginTop:'0',padding:'10px' }} >
                        <Avatar size={60} src={qoobee} />
                        <p>{Authentication.user.username}</p>
                    </header>

                    <Menu inlineCollapsed={true} mode="inline" defaultSelectedKeys={['1']} style={{
                        height: '100%',
                        backgroundColor: '#ffdde1', marginTop: '50%'
                    }}>
                        <Menu.Item key="1"  onClick={this.showConversations} >
                            <Icon type="mail" style={{ fontSize: '20px'}}/>
                            <span>Tin nhắn</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.showContacts}>
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
                        <HeaderRightSide/>
                        <Conversations conversationDisplay={this.state.conversationDisplay}/>
                        <Contacts contactDisplay={this.state.contactDisplay}/>

                </Layout>
            </Layout>
        );
    }
}

export default Side;