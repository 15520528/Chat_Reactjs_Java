import React, {Component} from 'react';
import {Alert, Avatar, Layout} from 'antd';
import qoobee from "../../images/qoobee.jpg";
import '../../css/Messages/messages.css';
import 'font-awesome/css/font-awesome.min.css';

const {
    Header, Footer, Sider, Content,
} = Layout;

const headerStyle = {
    height: '100px', backgroundColor: 'white', borderBottom: '1px solid #ebebe0 ', padding: '10px'
}

const footerStyle = {
    height: '80px', backgroundColor: 'white', borderTop: '1px solid #ebebe0 ', padding: '0px'
}

const ChatName = {
    marginTop: '-70px', marginLeft: '85px'
}

class Message extends Component {

    render() {
        return (
            <Layout style={{borderLeft: "1px solid #ebebe0"}}>
                <Header style={headerStyle}>
                    <Avatar size={80} src={qoobee}/>
                    <h3 style={ChatName}>Ms. QooBee</h3>
                </Header>
                <Content className="messages">
                    <ul>
                        <li className="sent">
                            <img src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                            <p>How the hell am I supposed to get a jury to believe you when I am not even sure that
                                I
                                do?!</p>
                        </li>
                        <li className="replies">
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                            <p>When you're backed against the wall, break the god damn thing down.</p>
                        </li>
                        <li className="replies">
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                            <p>Excuses don't win championships.</p>
                        </li>
                        <li className="sent">
                            <img src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                            <p>Oh yeah, did Michael Jordan tell you that?</p>
                        </li>
                        <li className="replies">
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                            <p>No, I told him that.</p>
                        </li>
                        <li className="replies">
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                            <p>What are your choices when someone puts a gun to your head?</p>
                        </li>
                        <li className="sent">
                            <img src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                            <p>What are you talking about? You do what they say or they shoot you.</p>
                        </li>
                        <li className="replies">
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                            <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or,
                                you
                                do any one of a hundred and forty six other things.</p>
                        </li>
                    </ul>
                </Content>

                <Footer style={footerStyle}>
                    <div className="message-input">
                        <div className="wrap">
                            <form>
                            <textarea placeholder="Write your message... "></textarea>
                            </form>
                            <div className="tool">
                                <button className="submit"><i className="fa fa-paper-plane" style={{fontSize:'24px'}}></i></button>
                            </div>

                        </div>
                    </div>
                </Footer>

            </Layout>
        );
    }
}

export default Message;