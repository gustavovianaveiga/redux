//import
import { createStore } from 'redux'

//boas pratica
const CHANGE_USER = 'CHANGE-USER';
const LOGOUT = 'LOGOUT';

//actions
function changeUser(user) {
    return {
        type: CHANGE_USER,
        info: 'Change the current user',
        payload: user
    }
}

function logout() {
    return {
        type: LOGOUT,
        info: 'Current user logged out',
    }
}

const initialState = { user: '', isLogged: false }

//reducer
function useReducer(prevState = initialState, action) {
    switch (action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return {...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState;
    }
}
const store = createStore(useReducer);

console.log(store.dispatch(changeUser('roberto')));
console.log(store.getState());