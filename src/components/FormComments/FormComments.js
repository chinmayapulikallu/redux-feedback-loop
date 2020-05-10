import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class FormComments extends Component {
    state ={
        comments: ''
    }

    // handleChange to input the values and set the state
    handleChange = (event, typeofChange) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            comments: event.target.value
        })
    } 

    buttonClick = () => {
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/review');
    }  //dispatches to reducer, and takes to review page

    previousClick = () => {
        this.props.history.push('/understanding');
    } // allows users to go back to previous page and change their score.


    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <div>
                    <h3>Comments</h3>
                    <input className="inputClass" type="text" onChange={this.handleChange}></input>
                    <Button color="primary" variant="contained" size="large" onClick={this.previousClick}>PREVIOUS</Button>
                    <Button color="primary" variant="contained" size="large" onClick={this.buttonClick}>NEXT</Button> 
                </div>     
            </div>
        )
    }
}
export default FormComments;