import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Movies from './container/Movies/Movies';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App col-12">
      <div className="container">
        <header className="header">
          <Header />
        </header>
        {/* <div className="row"> */}
          <Movies />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
