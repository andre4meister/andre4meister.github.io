import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, name: "Hi,how are you", like: 1 },
  { id: 2, name: "it`s me first post", like: 22 },
  { id: 3, name: "Marik", like: 10 },
  { id: 4, name: "Vova", like: 44 },
  { id: 5, name: "Roman", like: 14 },
  { id: 6, name: "Bohdan", like: 40 },
];

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your dog?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Hello'},
  {id: 5, message: 'Bye'},
  {id: 6, message: 'QQ'},
];

let dialogsData = [
  {id: 1, name: 'Andrii'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Marik'},
  {id: 4, name: 'Vova'},
  {id: 5, name: 'Roman'},
  {id: 6, name: 'Bohdan'},
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
