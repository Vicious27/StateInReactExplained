import React from 'react';
import Button from './Button';
import Name from './Name';
import './App.css';



class Counter extends React.Component {
  state = { count: 0 }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <Name count={this.state.count} />
        <Button handleClick={this.handleClick} />
      </>
    )
  };
};

export default Counter;



