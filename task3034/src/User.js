import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName,
    }
  }
  render() {
    return (
      <div>User: {this.state.userName}</div>
    )
  }
}