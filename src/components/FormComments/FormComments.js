import React, { Component } from 'react'

class FormComments extends Component {
    state ={
        comment: ''
    }

    // handleChange to input the values and set the state
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            comment: event.target.value
        })
    } 

    buttonClick = () => {
        this.props.dispatch({
            type: 'ADD_COMMENT',
            payload: this.state.comment
        })
        this.props.history.push('/review');
    }  //dispatches to reducer, and takes to review page



    render() {
        return (
            <div className="formDiv">
                <h1>Any comments you want to leave?</h1>
                <div className="subDiv">
                    <h3>Comments</h3>
                    <input className="inputClass" type="text" onChange={this.handleChange}></input>
                </div>
                <button className="nextButton" onClick={this.buttonClick}>NEXT</button>
            </div>
        )
    }
}
export default FormComments;