import React, { Component } from 'react'

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
        }
        this.props.dispatch({
            type: 'ADD_SUPPORT', payload: this.state.support
        })
        this.props.history.push('/comments')
    } // dispatching to reducer and moves to comments page

    render() {
        return (
            <div className="formDiv">
                <h1>How well are you being supported?</h1>
                <div className="subDiv">
                    <div className="subDiv">
                        <select id="support" name="Support?" onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>   
                </div>

                <button className="nextButton" onClick={this.buttonClick}>NEXT</button>
            </div>
        )
    }
}
export default FormSupport;