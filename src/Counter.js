import React from 'react';
import Button from './Button';
import Name from './Name';
import './App.css';
import SimpleStorage from 'react-simple-storage';




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
        <SimpleStorage parent={this} />
        <Name count={this.state.count} />
        <Button handleClick={this.handleClick} />
      </>
    )
  };
};

export default Counter;



