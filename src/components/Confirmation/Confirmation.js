import React, { Component } from 'react'
import { Button } from '@material-ui/core';

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
                <Button color="primary" size="large" variant="contained" onClick={this.buttonClick}>Back To Home</Button>
            </div>
        )
    }
}
export default Confirmation;