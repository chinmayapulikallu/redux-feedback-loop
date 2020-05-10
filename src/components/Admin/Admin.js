import React, { Component } from 'react';
import AdminItem from '../AdminItem/AdminItem'
import axios from 'axios';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Admin.css';


class Admin extends Component {
    // const classes = () => useStyles();
    state = {
        feedbackList: []
    }
    componentDidMount = () => {
        this.getFeedBack();
    }

    deleteFeedback = (feedbackId) => {
        console.log('in feedback', feedbackId);
        axios.delete(`feedback/${feedbackId}`)
            .then(response => {
                console.log('response delete ',response)
                this.getFeedBack();
            }).catch(error => {
                alert(`couldn't delete Feedback. Try again later`);
                console.log(error);
            })
    } // axios request to delete a feedback from database
    

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
                                <TableCell align="left">Understanding</TableCell>
                                <TableCell align="left">Support</TableCell>
                                <TableCell align="left">Comments</TableCell>
                                <TableCell align="left" >Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{this.state.feedbackList.map(feedback =>
                            <AdminItem key={feedback.id} feedback={feedback}
                             deleteFeedback={this.deleteFeedback}/>)}</TableBody>
                        </Table>
                        </TableContainer> 
                        <Button className ="admin-button" color="primary" size="large" variant="contained" onClick={this.returnHome}>Back To Home</Button>
                
            </div>
        )
    }
}
export default Admin;