import React, { Component } from 'react';
import Routes from './routes';

import './styles.css'
import Header from './Components/Header'
import Main from './pages/Main'

/* sintax de componente Stateful -> com estado
function App() {
  return (
    <div className="App">
    <h1>Hello Rocketseat</h1>
    </div>
    );
  }*/
  
  // sintax de componente stateless -> sem estado
  const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
  )

  export default App;
