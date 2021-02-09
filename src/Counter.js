import React from 'react';
import './App.css';


class Counter extends React.Component {
  state = {
    count: 0
  };


  handleClick = e => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <h1 className="count">{this.state.count}</h1>
        <button className="button" onClick={this.handleClick}>Click me! +</button>
      </>
    )
  };
};


export default Counter;