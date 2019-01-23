import React, {Component} from 'react';
import Side from './Side/Side.js';
import ChatPage from './HomePages/ChatPage';
import LoginRegister from './Login-Register/Login-Register';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Authentication from './Authentication';
import { history } from '../Helper/History';

import connect from "react-redux/es/connect/connect";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('user')
            ? <Component {...props} username={Authentication.userName} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'123',
        };
    }

    componentDidMount() {
        var connection = new WebSocket('ws://localhost:8081/echo');
        connection.onopen = function () {
            connection.send('Ping'); //
        };
        connection.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };
        connection.onmessage = function (e) {
            console.log('Server: ' + e.data);
        };

    }

    render() {
        return(
            <Router history={history}>
                <div>
                    <Route path="/login" component={LoginRegister}/>
                    <Route path="/home" component={Side} />
                    <PrivateRoute exact path='/' component={ChatPage} />
                </div>
            </Router>
        );
    }
}
const mapStateToProps = (state) => {
    // this.setState({username:'Nà ní'});

    //  : state.userReducer.username
    // username:state.userReducer.username;
    console.log(state.userReducer.username)
    return {

    }
}
export default connect(
    mapStateToProps
)(App);
