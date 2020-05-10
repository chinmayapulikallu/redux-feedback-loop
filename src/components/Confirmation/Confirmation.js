import React, { Component } from 'react'
import { Button } from '@material-ui/core';

class Confirmation extends Component {

 //on clicking admin button moves to Admin page
    adminClick = () => {
    
         this.props.history.push('/admin')
    }  

//buttonClick takes to Feelings page on click
    buttonClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <h3>Feedback has been submitted</h3>
                <div className="home-button">
                    <Button color="primary" size="large" variant="contained" onClick={this.buttonClick}>Leave New Feedback</Button>
                </div>
                <div className="home-button">
                    <Button color="primary" size="large" variant="contained" onClick={this.adminClick}>Admin</Button>
                </div>
            </div>
        )
    }
}
export default Confirmation;