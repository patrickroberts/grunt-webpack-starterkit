import React from 'react';
import socket from '../socket.jsx';

const Message = React.createClass({
  getInitialState() {
    return {
      message: 'Awaiting response from server...',
    };
  },
  onResponse(message) {
    this.setState({message});
  },
  componentWillMount() {
    socket.on('response', this.onResponse);
  },
  componentDidMount() {
    setTimeout(()=>{socket.emit('request')}, 1000);
  },
  componentWillUnmount() {
    socket.off('response', this.onResponse);
  },
  render() {
    return (
      <p>{this.state.message}</p>
    );
  }
});

export default Message;
