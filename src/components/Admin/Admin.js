import React, { Component } from 'react';
import AdminItem from '../AdminItem/AdminItem'
import axios from 'axios';
import { Button } from '@material-ui/core';

class Admin extends Component {
    state = {
        feedbackList: []
    }
    componentDidMount = () => {
        this.getFeedBack();
    }

    getFeedBack = () => {
        axios({
            method: '/GET',
            url: '/feedback'
        }).then(response => {
            console.log(response);
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
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackList.map(feedback => 
                        <AdminItem key={feedback.id} feedback={feedback}/> )}
                    </tbody>  
                </table>
                <Button color="primary" size="large" variant="contained" onClick={this.returnHome}>Back To Home</Button>
            </div>
        )
    }
}
export default Admin;