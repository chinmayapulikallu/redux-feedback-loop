import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//importing Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const feelingReducer = (state='', action) => {
    return state;
}

const myStore = createStore(feelingReducer);



ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
