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
        // const feelingValue = this.props.reduxState.feedbacks.find(fff => fff.name === 'feeling').value;
       
        return (
            <div>
               <h1>Review Your Feedback</h1>
                <h3>Feelings:</h3>
                <p>{this.props.reduxState.feeling}</p>
                 {/* <p>{feelingValue}</p> */}
               <h3>UnderStanding:</h3>
                {/* <p>{this.props.dispatch}</p> */}
               <h3>Support:</h3>
                {/* <p>{this.props.dispatch}</p> */}
               <h3>Comments:</h3>
                {/* <p>{this.props.dispatch}</p> */}
               <div>
                   <button onClick={this.buttonClick}>Submit</button>
               </div>
            </div>
        
        )
    }
}
export default Review;