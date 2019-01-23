import React, { Component } from 'react';
import Conversation from '../Conversations/Conversation';
import {Layout, Menu, Icon, Comment, Avatar, Button, Tooltip, Badge, Collapse, Alert} from 'antd';
import { Input } from 'antd';
import qoobee from "../../images/qoobee.jpg";
import '../../css/Conversations/conversation.css';

const Panel = Collapse.Panel;
const Search = Input.Search;
const {
    Header, Content, Footer, Sider,
} = Layout;

const ConversationsMap = [
    {   id:"1",
        chatName:"Tâm sự với em"
    },
    {
        id:"2",
        chatName:"Hội yêu cún"
    },
    {
        id:"3",
        chatName:"Hội yêu mèo"
    },
    {
        id:"4",
        chatName:"Bộ tộc Golden"
    },
    ]

class Conversations extends Component{

    showConversations(){
        const menuItems = ConversationsMap.map((item)=>
            <Menu.Item key={item.id} style={{height:'70px',marginTop:'0' }} >
                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                <p className="nav-text">{item.chatName}</p>
                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                <div className="dot"></div>
            </Menu.Item>
        );
        return menuItems;
    }

    render() {
        return (
                <Layout style={{
                     height: '100%',width:'100%', display:this.props.conversationDisplay, overflow: 'auto'
                }}
                >
                    <div  id="conversations">
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
                            {this.showConversations()}
                        </Menu>
                    </div>
                </Layout>
        );
    }
}
export default Conversations;