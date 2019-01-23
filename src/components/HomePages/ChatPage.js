import React, {Component} from 'react';
import Side from '../Side/Side';
import Messages from "../Messages/Messages";
import {
    Layout
} from 'antd';

class ChatPage extends Component{
    render() {
        return(
            <Layout>
                <Side/>
                <Messages/>
            </Layout>
        );
    }
}
export default ChatPage;