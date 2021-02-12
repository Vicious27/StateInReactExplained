import React from "react";
import './App.css';

const UserForm = props => (
  <p>
    <label htmlFor={props.id}>{props.label}</label>:
    <input id={props.id} type="text" onChange={props.onChange} />
  </p>
);

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last"
  };

  handleFirst = e => {
    e.preventDefault();
    this.setState({ first: e.target.value });
  };

  handleLast = e => {
    e.preventDefault();
    this.setState({ last: e.target.value });
  };

  render() {
    return (
      <>
        <h2>
          {this.state.first} {this.state.last}
        </h2>
        <UserForm
          id="firstName"
          label="First"
          onChange={this.handleFirst} />
        <UserForm
          id="lastName"
          label="Last"
          onChange={this.handleLast} />
      </>
    );
  }
}

export default Practice3;