import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Upload from './components/Upload.js';
import Listado from './components/Listado.js';

const config = {
  apiKey: "AIzaSyDQtI0TgrkgUTmylF6DaFsMxbkmiV3hfY8",
  authDomain: "ubag-fb1cb.firebaseapp.com",
  databaseURL: "https://ubag-fb1cb.firebaseio.com",
  projectId: "ubag-fb1cb",
  storageBucket: "ubag-fb1cb.appspot.com",
  messagingSenderId: "437415118792"
};

firebase.initializeApp(config)


class App extends Component {

  render() {

    return (
      <div>
        <h1> HOLA  </h1>
        <Upload />

        <div>
          <h2> Listado de Apuntes </h2>
          <ul>
          <Listado config={config}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
