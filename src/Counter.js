import React from 'react';
import './App.css';


const Name = props => <h1>{props.count}</h1>;

class Counter extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <>
        <Name count={this.state.count} />
        <button className="button"
          onClick={e => {
            e.preventDefault();
            this.setState({
              count: this.state.count + 1
            });
          }}
        >Click me! + </button>
      </>
    )
  }
}

export default Counter;