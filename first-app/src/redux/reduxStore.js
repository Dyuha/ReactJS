import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
});

const store = createStore(reducers);

export default store;

