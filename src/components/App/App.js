import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FormToday from '../FormToday/FormToday';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormToday />
      </div>
    );
  }
}

export default App;
