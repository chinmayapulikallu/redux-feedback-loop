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
                    <div className="subDiv">
                        <select id="understanding" name="Understanding?" onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>   
                </div>

                <button className="nextButton">NEXT</button>
            </div>
        )
    }
}
export default FormUnderstand;