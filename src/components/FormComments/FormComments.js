import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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
            <div className="form">
                <h1 className="form-header">Any comments you want to leave?</h1>
                <div>
                    <TextField  id="standard-basic" label="Comments" type="text"  onChange={this.handleChange}/>
                    <div className="button">
                        <Button className="form-previous" color="primary" variant="contained" size="large" onClick={this.previousClick}>PREVIOUS</Button>
                        <Button className="form-next" color="primary" variant="contained" size="large" onClick={this.buttonClick}>NEXT</Button> 
                    </div>
                </div>     
            </div>
        )
    }
}
export default FormComments;