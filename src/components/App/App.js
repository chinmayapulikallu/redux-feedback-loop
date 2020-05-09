import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'reacter-router-dom';
//importing components
import Header from '../Header/Header';
import FormFeelings from '../FormFeelings/FormFeelings';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          {/* Routes for components, FormFeeling is homepage */}
          <Route exact path = "/" component={FormToday} />
          <Route exact path="/understanding" component={FormUnderstand} />
          <Route exact path="/support" component={FormSupport} />
          <Route exact path="/" component={FormComments} />
          <Route exact path="/" component={Confirmation} />
          <Route exact path="/" component={Admin} />

        </Router>
        <FormFeelings />
      </div>
    );
  }
}

export default App;
