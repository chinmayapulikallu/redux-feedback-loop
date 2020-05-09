import React, { Component } from 'react'

class FormComments extends Component {
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
    }
    render() {
        return (
            <div className="formDiv">
                <h1>Any comments you want to leave?</h1>
                <div className="subDiv">
                    <h3>Comments</h3>
                    <input className="inputClass" type="text" onChange={this.handleChange}></input>
                </div>

                <button className="nextButton">NEXT</button>
            </div>
        )
    }
}
export default FormComments;