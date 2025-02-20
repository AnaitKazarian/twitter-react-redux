import {legacy_createStore as createStore} from "redux";
import {combineReducer} from "../reducer/shmitterReducer.js";


const initialUserState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
};

const initialStatsState = {
    followers: 0,
    following: 0
};


export const store = createStore(combineReducer, {
    user: initialUserState,
    stats: initialStatsState,
});


