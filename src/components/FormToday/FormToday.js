import React, { Component } from 'react';


class FormToday extends Component {
    handleChange = (event) =>{
        console.log('in handleChange', event.target.value);
    }
    render() {
        return (
            <div className="formDiv">
                <h1>How are you feeling Today?</h1>
                <div className="subDiv">
                    <h3>Feeling?</h3>
                    <input className="inputClass" type="number" onChange={this.handleChange}></input>
                </div>
                <button className="nextButton">NEXT</button>
            </div>
        )
    }
}
export default FormToday;