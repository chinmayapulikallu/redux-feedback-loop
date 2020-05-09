import React, { Component } from 'react'

class Review extends Component {
    buttonClick = () => {
        // let feebackToSend = {
        //     feeling:  this.props.dispatch ,
        //     understanding: this.props.dispatch ,
        //     support: this.props.dispatch ,
        //     comments: this.props.dispatch 
        // }
    }

    render() {
        console.log("review page :: ",this.props)
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