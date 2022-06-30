import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
// import {store} from './day-2/assignments/React-Redux/store';
import {store} from "./day-3/assignments/Redux-CombineReducers/store";
import { BrowserRouter } from 'react-router-dom';

 // import {ReduxContextProvider} from './Redux/ReduxContextProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
    <Provider store={store}>
       {/* <ReduxContextProvider store={store}> */}
    <App />
    {/* </ReduxContextProvider> */}
    </Provider> 
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
