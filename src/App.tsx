import React from 'react';
import logo from './logo.svg';
import mainPhoto from './photos/mainMom.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Welcome to - The AI Mom -</h4>
      </header>
      <body>
        <section className="App-body">
          <section className="App-main-photo"> 
              <img src={mainPhoto} className="App-logo" alt="logo" />
          </section>
          <section className="App-main-chat"> 
              <h1>Ask me anything!</h1>
          </section>
        </section>
      </body>
    </div>
  );
}

export default App;
