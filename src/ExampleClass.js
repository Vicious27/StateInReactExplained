import React from 'react';
import './App.css';



class ExampleClass extends React.Component {
  state = {
    name: "React"
  }

  render() {
    return (
      <h1> `Welcome ${this.state.name}`</h1>
    )
  }
}

export default ExampleClass;