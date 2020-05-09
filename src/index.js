import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//importing Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    // feeling: '',
    // understanding: '',
    // support: '',
    // comments: ''
    feedbacks: []
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
            feedbacks: [...state.feedbacks, { name: "comment", value: action.payload }]
        }
        
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
