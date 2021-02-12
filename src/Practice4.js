import React from "react";
import './App.css';


const Header = props =>
  <h2>{props.text}</h2>;

const Button = props =>
  <button
    className="button"
    onClick={props.onClick}>{props.text}</button>;

class Practice4 extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 })
  };

  handleReset = () => {
    this.setState({ count: 0 })
  };


  render() {
    return (
      <>
        <Header text={this.state.count} />
        <Button onClick={this.handleDecrease} text="Minus -" />
        <Button onClick={this.handleIncrement} text="Plus +" />
        <Button onClick={this.handleReset} text="Reset" />
      </>
    );
  }
}

export default Practice4;
