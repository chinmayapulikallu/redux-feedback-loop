import React, { Component } from 'react'

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
            <div className="formDiv">
                <h1>Any comments you want to leave?</h1>
                <div className="subDiv">
                    <h3>Comments</h3>
                    <input className="inputClass" type="text" onChange={this.handleChange}></input>
                </div>
                <button className="nextButton" onClick={this.buttonClick}>NEXT</button>
                <button onClick={this.previousClick}>PREVIOUS</button>
            </div>
        )
    }
}
export default FormComments;