import React, { Component } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';
// import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles/MuiThemeProvider';
// import {createMuiTheme} from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';

// const myTheme = createMuiTheme({
//                 palette:{
//                     primary: green
//                 }
// }) //setting the color of palette primary to green

class Review extends Component {

    //calling a method to send the data from redux store to server
    populateFeedback = () => {
        let feelingValue = null
        let understandingValue = null
        let supportValue = null
        let commentsValue = null
        // debugger;
        
        if (this.props.reduxState.feedbacks.length > 0) {
            feelingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'feeling').value;
            understandingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'understanding').value;
            supportValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'support').value;
            commentsValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'comments').value;  
        }
        return ({
            feeling:  feelingValue ,
            understanding: understandingValue ,
            support: supportValue ,
            comments: commentsValue
        })
    }

    buttonClick = () => {       
        let feedbackToSend = this.populateFeedback()
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackToSend
        }).then (response => {
            console.log('response from database', response, this.props);    
            this.props.dispatch({
                type: 'NEXT_FEEDBACK'
            })  // clears the state in reducers after posting feedback successfully into the database
            this.props.routeProps.history.push('/confirmation')  //from review page goes to confirmation page
        }).catch(error => {
            alert('error!!');
            console.log(error);
        })
    }

    render() {
        console.log("review page :: ",this.props)
        // console.log("review page :: ", this.populateFeedback())
        const feedback = this.populateFeedback()
        // console.log("feedback :: ", this.populateFeedback())
        //setting values for the feedback from the store to render on DOM
        let feelingValue = null
        let understandingValue = null
        let supportValue = null
        let commentsValue = null

        if (this.props.reduxState.feedbacks.length > 0) {
            feelingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'feeling').value;
            understandingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'understanding').value;
            supportValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'support').value;
            commentsValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'comments').value;
        }
         return (
            <div>
               <h1>Review Your Feedback</h1>
                 <h3>Feelings: {feedback.feeling} </h3>
                <h3>Understanding:{feedback.understanding}</h3>
                <h3>Support:{feedback.support}</h3>
                <h3>Comments:{feedback.comments}</h3>
               <div>
                   {/* <MuiThemeProvider theme = {myTheme}> */}
                   <Button color="primary" variant="contained" size="large"onClick={this.buttonClick}>Submit</Button>
                   {/* </MuiThemeProvider> */}
               </div>
            </div>
        
        )
    }
}
export default Review;