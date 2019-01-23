import {Actions} from "../Constants/Constants";

function userReducer(state=[], action){
    switch (action.type) {
        case Actions.USERLOGIN:
            return {...state, username:action.username};
            break;
        default:
            return state;
    }
}
export default userReducer;