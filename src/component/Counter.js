import React, { Component } from 'react'


class Counter extends Component {

    state={
        count: 0
    }

    count =() =>{
        this.setState({count:this.state.count+1})
    }
    render() { 
        return (
            <>
            <h1>
               Number : {this.state.count}
            </h1>
            <button onClick={this.count}>
                counter
            </button>
            </>
        );
    }
}
 
export default Counter;