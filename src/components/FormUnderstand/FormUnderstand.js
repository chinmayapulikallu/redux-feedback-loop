import React, { Component } from 'react'

class FormUnderstand extends Component {
    state = {
        understanding: '0'
    }
     // handleChange to input the values and change the state
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            understanding: event.target.value
        })
    } 

    buttonClick = () => {
        if (this.state.understanding === '0') {
            alert('select a value!!');
        }
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING', payload: this.state.understanding
        })
        this.props.history.push('/support')
    }  //dispatching to reducer and moves to support page

    previousClick = () => {
        this.props.history.push('/');
    }  // allows users to go back to previous page and change their score.

    render() {
        return (
            <div className="formDiv">
                <h1>How well are you understanding the content?</h1>
                <div className="subDiv">
                    <div className="subDiv">
                        <select id="understanding" name="Understanding?" onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>   
                </div>
                <button className="nextButton" onClick={this.buttonClick}>NEXT</button>
                <button onClick={this.previousClick}>PREVIOUS</button>
            </div>
        )
    }
}
export default FormUnderstand;