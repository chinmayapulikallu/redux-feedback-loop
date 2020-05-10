import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

//importing components
import Header from '../Header/Header';
import FormFeelings from '../FormFeelings/FormFeelings';
import FormUnderstand from '../FormUnderstand/FormUnderstand';
import FormSupport from '../FormSupport/FormSupport';
import FormComments from '../FormComments/FormComments';
import Review from '../Review/Review';
import Confirmation from '../Confirmation/Confirmation';
import Admin from '../Admin/Admin';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {JSON.stringify(this.props.dispatch )}
        <Router>
          {/* Routes for components, FormFeeling is homepage */}
          <Route exact path="/" render={(props)=><FormFeelings {...props} dispatch={this.props.dispatch}/>} />
          <Route  path="/understanding" render={(props) => <FormUnderstand {...props} dispatch={this.props.dispatch} />} />
          <Route  path="/support" render={(props) => <FormSupport {...props} dispatch={this.props.dispatch} />} />
          <Route  path="/comments" render={(props) => <FormComments {...props} dispatch={this.props.dispatch} />} />
          <Route  path="/review" render={(props) => <Review {...this.props} routeProps={props} dispatch={this.props.dispatch} />} />
          <Route  path="/confirmation" render={(props) => <Confirmation {...props} dispatch={this.props.dispatch} />} />
          <Route  path="/admin" render={(props) => <Admin {...props} dispatch={this.props.dispatch} />} /> 
        </Router>
       
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);

