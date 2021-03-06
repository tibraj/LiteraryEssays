import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter === 0 ? 1 : 0
            }
        })
    }


    render() {
     return <button onClick={this.handleClick}>Like {this.state.counter}</button>
    }

}

export default Counter