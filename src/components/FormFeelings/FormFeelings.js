import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import 'typeface-roboto';


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
        }else {
            this.props.dispatch({
                type: 'ADD_FEELING', payload: this.state.feeling
            })
            this.props.history.push('/understanding')
        }
    } // dispatching to reducer and moves to understanding page

    render() {
        return (
            <div className="form">
                <h1 className="form-header">How are you feeling Today?</h1>
                <div>
                    <select id="feeling" name="Feeling?" className="form-input" onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>                
                 <div className="button">
                    <Button color="primary" variant="contained" size="large" className="form-next" onClick={this.buttonClick}>NEXT</Button>
                 </div>       
                
            </div>
        )
    }
}



export default FormFeelings;