import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAY1Xe7ANp6vyVbULmwGM6jJvt8rVyapzc",
    authDomain: "to-do-react-app-d4a13.firebaseapp.com",
    databaseURL: "https://to-do-react-app-d4a13.firebaseio.com",
    projectId: "to-do-react-app-d4a13",
    storageBucket: "to-do-react-app-d4a13.appspot.com",
    messagingSenderId: "721536914074",
    appId: "1:721536914074:web:691529eb71fd1971ce4523",
    measurementId: "G-ZVBPPVPYW0"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
