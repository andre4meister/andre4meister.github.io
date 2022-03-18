import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText, updateNewMessageText, addMessage } from './Redux/state';
import state, {subscriber} from './Redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                    updateNewMessageText={updateNewMessageText} addMessage={addMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscriber(rerenderEntireTree);
reportWebVitals();
