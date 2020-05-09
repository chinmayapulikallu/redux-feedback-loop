import React, { Component } from 'react'

class FormUnderstand extends Component {
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
    }
    render() {
        return (
            <div className="formDiv">
                <h1>How well are you understanding the content?</h1>
                <div className="subDiv">
                    <h3>Understanding?</h3>
                    <input className="inputClass" type="number" onChange={this.handleChange}></input>
                </div>

                <button className="nextButton">NEXT</button>
            </div>
        )
    }
}
export default FormUnderstand;