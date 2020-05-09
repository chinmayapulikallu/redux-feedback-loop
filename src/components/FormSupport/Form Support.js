import React, { Component } from 'react'

class FormSupport extends Component {
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
    }
    render() {
        return (
            <div className="formDiv">
                <h1>How well are you being supported?</h1>
                <div className="subDiv">
                    <h3>Support?</h3>
                    <input className="inputClass" type="number" onChange={this.handleChange}></input>
                </div>

                <button className="nextButton">NEXT</button>
            </div>
        )
    }
}
export default FormSupport;