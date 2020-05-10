import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


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
                        <TableCell align="left"><IconButton aria-label="delete" onClick={this.handleClick}>
                            <DeleteIcon /></IconButton></TableCell>   
                    </TableRow>
                
        )
    }
}
export default AdminItem;