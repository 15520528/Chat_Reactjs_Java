import React, {Component} from 'react';
import Side from '../components/Side.js';
import Messages from "./Messages/Messages";
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;


class App extends Component {
    render() {
        return (
            <Layout >
                <Side/>
                <Messages/>
            </Layout>
        );
    }
}

export default App;
