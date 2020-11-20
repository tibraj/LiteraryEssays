import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signup from './reducers/signup.js';
import login from './reducers/login.js';
import currentUser from './reducers/currentUser.js';
import newEssayForm from './reducers/newEssayForm.js';

const reducer = combineReducers({
    signup,
    login,
    currentUser,
    newEssayForm
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store 