import React, { Component } from 'react'
import { Button } from '@material-ui/core';

class FormSupport extends Component {
    state = {
        support: '0'
    }
     // handleChange to input the values and change the state
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    buttonClick = () => {
        if (this.state.support === '0') {
            alert('select a value!!');
        } else {
            this.props.dispatch({
            type: 'ADD_SUPPORT', payload: this.state.support
             })
        this.props.history.push('/comments')
        }     
    } // dispatching to reducer and moves to comments page

    previousClick = () => {
        this.props.history.push('/understanding');
    }  // allows users to go back to previous page and change their score.

    render() {
        return (
            <div className="form">
                <h1 className="form-header">How well are you being supported?</h1>
                <div>
                    <select id="support" name="Support?" className="form-input" onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select>  
                </div>
                <div className="button"> 
                    <Button className="form-previous" color="primary" variant="contained" size="large" onClick={this.previousClick}>PREVIOUS</Button>
                    <Button className="form-next" color="primary" variant="contained" size="large" onClick={this.buttonClick}>NEXT</Button>      
                </div>
            </div>
        )
    }
}
export default FormSupport;