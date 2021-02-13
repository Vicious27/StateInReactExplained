import React from "react";
import './App.css';
import SimpleStorage from 'react-simple-storage';


//made state persistent with SimpleStorage

const Header = props =>
  <h2>{props.text}</h2>;

const Button = props =>
  <button
    className="button"
    onClick={props.onClick}>{props.text}</button>;

class Practice5 extends React.Component {
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
        <SimpleStorage parent={this} />
        <Header text={this.state.count} />
        <Button
          onClick={this.handleDecrease}
          text="Minus -" />
        <Button
          onClick={this.handleIncrement}
          text="Plus +" />
        <Button
          onClick={this.handleReset}
          text="Reset" />
      </>
    );
  }
}

export default Practice5;