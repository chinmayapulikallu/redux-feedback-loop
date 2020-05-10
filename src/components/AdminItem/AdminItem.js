import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class AdminItem extends Component {

    handleClick = () => {
        console.log('in handleClick', this.props.feedback.id);
        this.props.deleteFeedback(this.props.feedback.id);
    } //on delete, this function deletes feedback matching id
    
    
    render() {
        let feedback = this.props.feedback;
        return (
                    <TableRow key={feedback.id}>
                        <TableCell align="left">{feedback.feeling}</TableCell>
                        <TableCell align="left">{feedback.understanding}</TableCell>
                        <TableCell align="left">{feedback.support}</TableCell>
                        <TableCell align="left">{feedback.comments}</TableCell>
                <TableCell align="left"><Button color="secondary" variant="contained" onClick={this.handleClick}>Delete</Button></TableCell>
                    </TableRow>
                
        )
    }
}
export default AdminItem;