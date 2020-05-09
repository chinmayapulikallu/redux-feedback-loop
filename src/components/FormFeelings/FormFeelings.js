import React, { Component } from 'react';
import {connect} from 'react-redux';


class FormFeelings extends Component {
    state = {
        feeling: '0'
    }
    // handleChange to input the values and change the state
    handleChange = (event) =>{
        console.log('in handleChange', event.target.value);
        this.setState({
            feeling: event.target.value
        })
    }

    buttonClick = () => {
        if(this.state.feeling === '0') {
            alert('select a value!!');
        }
        this.props.dispatch({
            type: 'ADD_FEELING', payload: this.state.feeling
        })
        this.props.history.push('/understanding')
    } // dispatching to reducer

    render() {
        return (
            <div className="formDiv">
                    <h1>How are you feeling Today?</h1>
                    <div className="subDiv">
                    <select id="feeling" name="Feeling?" onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>      
                <button className="nextButton" onClick={this.buttonClick}>NEXT</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});

export default connect()(FormFeelings);