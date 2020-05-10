import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

class AdminItem extends Component {
    // const useStyles = makeStyles({
    //     table: {
    //         minWidth: 650,
    //     },
    // });
    render() {
        let feedback = this.props.feedback;
        return (
                    <TableRow key={feedback.id}>
                        <TableCell align="right">{feedback.feeling}</TableCell>
                        <TableCell align="right">{feedback.understanding}</TableCell>
                        <TableCell align="right">{feedback.support}</TableCell>
                        <TableCell align="right">{feedback.comments}</TableCell>
                        <TableCell align="right"><Button color="secondary" variant="contained">Delete</Button></TableCell>
                    </TableRow>
                
        )
    }
}
export default AdminItem;