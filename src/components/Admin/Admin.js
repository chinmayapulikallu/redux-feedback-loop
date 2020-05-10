import React, { Component } from 'react';
import AdminItem from '../AdminItem/AdminItem'
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

 const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


class Admin extends Component {
    // const classes = () => useStyles();
    state = {
        feedbackList: []
    }
    componentDidMount = () => {
        this.getFeedBack();
    }

    getFeedBack = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            this.setState({
                feedbackList: response.data
            })
        }).catch(error => {
            alert(' error getting data from server');
            console.log('error to get data from server', error);
        })
    } // GET request for display data on to the page

    returnHome = () => {
        this.props.history.push('/');
    }  //on click takes back to the Home page

    render() {
        return (
            <div>
                <h1>Feedback Results</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell align="right">Understanding</TableCell>
                                <TableCell align="right">Support</TableCell>
                                <TableCell align="right">Comments</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{this.state.feedbackList.map(feedback =>
                            <AdminItem key={feedback.id} feedback={feedback} />)}</TableBody>
                        </Table>
                        </TableContainer>
                {/* <table>
                    <thead>

                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead> */}
                    {/* <tbody>
                        {this.state.feedbackList.map(feedback => 
                        <AdminItem key={feedback.id} feedback={feedback}/> )}
                    </tbody>  
                </table> */}
                <Button color="primary" size="large" variant="contained" onClick={this.returnHome}>Back To Home</Button>
            </div>
        )
    }
}
export default Admin;