import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;

