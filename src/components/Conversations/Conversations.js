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


class Conversations extends Component{
    render() {
        return (
                <Layout style={{
                     height: '100%',width:'100%',
                }}
                >
                    <div  style={{height:'100px',backgroundColor:'white',
                        borderRight: '1px solid #ebebe0 ', borderBottom: '1px solid #ebebe0 '}} align="middle">

                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200,height:'30px', margin:'10px auto 10px' }}
                        />
                        <div style={{ width: 200, height:'30px', margin:'10px auto 10px' }}>
                            <Button shape="circle" icon="user-add" style={{ marginRight:'10px' }}></Button>
                            <Button shape="circle" icon="plus-circle" />
                        </div>
                    </div>

                    <div style={{overflow: 'auto',width:'100%', display:this.props.messageDisplay}} id="conversations">
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
                            <Menu.Item key="1" style={{height:'70px',marginTop:'0' }} >
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">QooBee</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="2" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="3" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="4" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="5" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="6" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="7" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                            <Menu.Item key="8" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <p className="nav-text">nav 1</p>
                                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                                <div className="dot"></div>
                            </Menu.Item>
                        </Menu>
                    </div>
                    {/*<div style={{height:'auto'}}>*/}
                        {/*<Alert showIcon={false}  message="Bạn bè" banner style={{marginLeft:'1px', backgroundColor:'white',*/}
                            {/*borderBottom: '1px solid #ebebe0 ', position:'fixed'}}/>*/}
                    {/*</div>*/}

                    <div style={{overflow: 'auto', display:this.props.conversationDisplay}} id="contacts">

                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
                            <Menu.Item key="1" style={{height:'70px',marginTop:'0' }} >
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="3" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="4" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="5" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="6" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="7" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="8" style={{height:'70px', marginTop:'0'}}>
                                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Layout>
        );
    }
}
export default Conversations;