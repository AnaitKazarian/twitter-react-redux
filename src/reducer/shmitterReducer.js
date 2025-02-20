import {CHANGE_NAME, CHANGE_AVATAR, CHANGE_STATS} from "../actions/shmitterActions.js";
import {combineReducers} from "redux";

const initialState = {
    name: "Monster",
    avatar: "https://gravatar.com/avatar/000?d=monsterid",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name};
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar};
        default:
            return state;
    }
};

const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_STATS:
            return {
                ...state,
                [action.payload.statsType]: state[action.payload.statsType] + action.payload.sum < 0 ? 0 : state[action.payload.statsType] + action.payload.sum
            };
        default:
            return state;
    }
};

export const combineReducer = combineReducers({
    user: userReducer,
    stats: statsReducer,
});