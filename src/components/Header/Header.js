import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="App">  
            {/* header component for the feedback  page   */}
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4 className="App-tag"><i>Don't forget it!</i></h4>
                </header>
            </div>
        )
    }
}
export default Header;