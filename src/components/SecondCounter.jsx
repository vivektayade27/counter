import React, { Component } from 'react'

export default class SecondCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    inc = ()=> this.setState({count:this.state.count+1});
    dec = ()=> this.setState({count:this.state.count-1});
    res = ()=> this.setState({count:0});

    render() {
        return (
            <div>
                <h2>Hello SecondCounter</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
                <button onClick={this.res}>Reset</button>
            </div>
        )
    }
}
