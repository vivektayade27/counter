import React, { Component } from 'react'

export default class ThirdCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.res = this.res.bind(this);
    }

    inc() { 
        this.setState({count:this.state.count+1})
    };

    dec() {
        this.setState({count:this.state.count-1})
    };

    res(){
        this.setState({count:0})
    };

    render() {
        return (
            <div>
                <h2>Hello ThirdCounter</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
                <button onClick={this.res}>Reset</button>
            </div>
        )
    }
}
