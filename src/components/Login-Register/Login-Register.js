import React, {Component} from 'react';
import Authentication from '../Authentication';
import { connect } from 'react-redux';
import {UserActions} from '../../Redux/Actions/UserActions';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col,
} from 'antd';


class LoginRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };
    }
    handleChange=(event)=>{
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const user={
            username:''
        }
        user.username = this.state.user.username;
        this.props.Login(this.state.user.username, this.state.user.password);
        // Authentication.authenticate(1000);
        // Authentication.setUser(user);
        // localStorage.setItem('user', JSON.stringify(user));
        // this.props.history.push('/');
    }

    render() {
        return (
            <Row style={{marginTop:'200px'}}>
                <Col span={8} offset={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                                   placeholder="Username" name="username" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}  />}  type="password"
                                   placeholder="Password" name="password" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary"  className="login-form-button" onClick={this.handleSubmit} >
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
        Login: (username, password) => dispatch(UserActions.login(username, password)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRegister);