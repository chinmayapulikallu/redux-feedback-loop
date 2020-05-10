import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class AdminItem extends Component {
    render() {
        console.log('feedback', this.props.feedback);
        let feedback = this.props.feedback;
        return (
            <div>
                <h1>Hello Admin Item</h1>
                <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><Button color="secondary" variant="contained">Delete</Button></td>
                </tr>
            </div>
        )
    }
}
export default AdminItem;