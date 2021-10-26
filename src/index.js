import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Context from './store/context';
import useGlobalStore from './store/useGlobalStore';




const Index = () => {
    const store = useGlobalStore();

    return <Context.Provider value={store}>
        <App />
    </Context.Provider>
}


ReactDOM.render( <Index/>, document.getElementById('root') );

reportWebVitals();
