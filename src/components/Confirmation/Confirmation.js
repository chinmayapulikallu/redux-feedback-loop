import React, { Component } from 'react'

class Confirmation extends Component {
//buttonClick takes to Feelings page on click
    buttonClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <h3>Feedback has been submitted</h3>
                <button onClick={this.buttonClick}>Back To Home</button>
            </div>
        )
    }
}
export default Confirmation;