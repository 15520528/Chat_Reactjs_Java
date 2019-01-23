import axios from 'axios';

function login(username, password){
    return new Promise(function(resolve, reject) {
        const user={
            username:''
        };
        user.username = username;
        localStorage.setItem('user', JSON.stringify(user));
        axios.get(`http://localhost:8081/abc`)
            .then(res => {
                console.log(res.data);
            })
            .catch(()=>{
                console.log("Error");
                // reject("Error vl");
                const user={
                    username:username
                }
                resolve(user);
            })
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    window.location.reload(true);
}

export const UserService = {
    login,
    logout
};