import React, { Component } from 'react';

class CounterBy4 extends Component {
  state = {
    count: 0,
  };

  Increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  IncrementWithoutPrevState = () => {
    this.setState(() => ({
      count: this.state.count + 1,
    }));
    this.setState(() => ({
      count: this.state.count + 1,
    }));
    this.setState(() => ({
      count: this.state.count + 1,
    }));
    this.setState(() => ({
      count: this.state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.IncrementWithoutPrevState}>
          Increment 4 times without PrevState
        </button>
        <button onClick={this.Increment}>
          Increment 4 times with PrevState
        </button>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export { CounterBy4 };
