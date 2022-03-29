import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});
reportWebVitals();
