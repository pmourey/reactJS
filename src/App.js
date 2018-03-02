import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import MyComponent from './MyComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
	      <p className="App-intro">Bonjour {this.props.name}, mon ami!</p>
        <Clock ></Clock>
        <MyComponent />
</div>
    );
  }
}

export default App;
