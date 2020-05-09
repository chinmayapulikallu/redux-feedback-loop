import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
//importing components
import Header from '../Header/Header';
import FormFeelings from '../FormFeelings/FormFeelings';
import FormUnderstand from '../FormUnderstand/FormUnderstand';
import FormSupport from '../FormSupport/FormSupport';
import FormComments from '../FormComments/FormComments';
import Confirmation from '../Confirmation/Confirmation';
import Admin from '../Admin/Admin';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          {/* Routes for components, FormFeeling is homepage */}
          <Route exact path = "/" component={FormFeelings} />
          <Route exact path="/understanding" component={FormUnderstand} />
          <Route exact path="/support" component={FormSupport} />
          <Route exact path="/comments" component={FormComments} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/admin" component={Admin} />
        </Router>
       
      </div>
    );
  }
}

export default App;
