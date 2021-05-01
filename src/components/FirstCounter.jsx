import React, { Component } from 'react'

export default class FirstCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div>
                <h2>Hello FirstCounter</h2>
                <h3>{this.state.count}</h3>
                <button onClick={()=> this.setState({count:this.state.count+1})}>Inc</button>
                <button onClick={()=> this.setState({count:this.state.count-1})}>Dec</button>
                <button onClick={()=> this.setState({count:0})}>Reset</button>
            </div>
        )
    }
}
