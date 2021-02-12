import React from "react";
import './App.css';


const Header = props => (
  <h2>{props.label}</h2>
);

const Button = props => (
  <button
    className="button"
    label={props.label}
    onClick={props.onClick}>{props.label}</button>
);

class Practice4 extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = e => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 })
  };

  handleDecrease = e => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 })
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({ count: 0 })
  }


  render() {
    return (
      <>
        <Header label={this.state.count} />
        <Button onClick={this.handleDecrease} label="Minus -" />
        <Button onClick={this.handleIncrement} label="Plus +" />
        <Button onClick={this.handleReset} label="Reset" />
      </>
    );
  }
}

export default Practice4;
