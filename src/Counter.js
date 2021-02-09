import React from 'react';
import './App.css';


class Counter extends React.Component {
  state = {
    name: "Raul garcia"
  }


  render() {
    return (
      <>
        <h1 className="count">{this.state.name}</h1>
        <button className="button" onClick={e => {
          e.preventDefault();
          this.setState({
            name: "Vicious Ways"
          });
        }} >Click me!</button>
      </>
    )
  };
};


export default Counter;