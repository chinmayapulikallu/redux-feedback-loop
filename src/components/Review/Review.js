import React, { Component } from 'react';
import axios from 'axios';

class Review extends Component {

    //calling a method to send the data from redux store to server
    populateFeedback = () => {
        const feelingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'feeling').value;
        const understandingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'understanding').value;
        const supportValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'support').value;
        const commentsValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'comments').value;     
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
        console.log("review page :: ", this.populateFeedback())
        //setting values for the feedback from the store to render on DOM
        const feelingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'feeling').value;
        const understandingValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'understanding').value;
        const supportValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'support').value;
        const commentsValue = this.props.reduxState.feedbacks.find(feedback => feedback.name === 'comments').value;
        return (
            <div>
               <h1>Review Your Feedback</h1>
                <h3>Feelings: {feelingValue} </h3>
                <h3>Understanding:{understandingValue}</h3>
                <h3>Support:{supportValue}</h3>
                <h3>Comments:{commentsValue}</h3>
               <div>
                   <button onClick={this.buttonClick}>Submit</button>
               </div>
            </div>
        
        )
    }
}
export default Review;