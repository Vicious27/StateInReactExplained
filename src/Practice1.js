import React from 'react';


class Practice1 extends React.Component {
  state = {
    username: "Vicious ways"
  };

  render() {
    return (
      <p>{this.state.username}</p>
    )
  };
};

export default Practice1;