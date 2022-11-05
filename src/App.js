import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Login from './components/Login';
import User from './components/User';
import Counter from './components/Counter';


/* obje array tanımı */



function App() {

  return (

    <div className="App">
      <User />

      <Counter />
      <Header />
      <Login />


    </div >

  );
}

export default App;
