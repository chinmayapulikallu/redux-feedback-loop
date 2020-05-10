import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//importing Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    feedbacks: []   //feedbacks Array to store the feedback 
}

const feedbackReducer = (state = initialState, action) => {
    console.log("current state :: ", state.feedbacks)
    if(action.type === 'ADD_FEELING') {
        console.log('action payload', action.payload);
        return {
            feedbacks:[...state.feedbacks, {name:"feeling", value: action.payload}]
        }
        
    } else if (action.type === 'ADD_UNDERSTANDING'){
        console.log('action payload', action.payload);
        return {
            feedbacks:[...state.feedbacks, {name:"understanding", value: action.payload}]
        }
       
    } else if (action.type === 'ADD_SUPPORT') {
        console.log('action payload', action.payload);
        return {
            feedbacks: [...state.feedbacks, { name: "support", value: action.payload }]
        }
     
    } else if (action.type === 'ADD_COMMENTS') {
        console.log('action payload', action.payload);
        return {
            feedbacks: [...state.feedbacks, { name: "comments", value: action.payload }]
        }   
    } else if (action.type === 'NEXT_FEEDBACK') {
        return state;
    }
    return state;
}

const myStore = createStore(feedbackReducer);

myStore.subscribe(() => {
    console.log("store state :: ", myStore.getState())
})

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
