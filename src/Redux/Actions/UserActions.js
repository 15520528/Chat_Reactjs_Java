import {Actions} from '../Constants/Constants';
import {UserService} from '../../Services/UserService';
import {history} from '../../Helper/History';
import { Redirect } from 'react-router-dom'
import {applyMiddleware as dispatch} from "redux";


function login(username, password) {
        UserService.login(username, password)
            .then(user =>{
                console.log(user.username);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(request(user));
                history.push('/');
                window.location.reload(true);
            })
            .catch(error =>{
                console.log('error', error);
                history.push('/login');
                window.location.reload(true);
        });
        //     .then(
        //     user => {
        //         // dispatch(success(user));
        //         history.push('/');
        //         console.log('success');
        //     },
        //     error => {
        //         console.log('fail');
        //         // dispatch(failure(error));
        //         // dispatch(alertActions.error(error));
        //     }
        // );
        function request(user) { return { type: Actions.USERLOGIN} }
}

function logout() {
        UserService.logout();
        // return { type: Actions.USERLOGOUT};
}

export const UserActions = {
    login,
    logout
};