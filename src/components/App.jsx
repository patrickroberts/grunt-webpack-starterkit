import React from 'react';
import Message from './Message.jsx'

const App = React.createClass({
  render() {
    return (
      <section style={{textAlign: "center"}}>
        <h1>Hello World</h1>
        <Message />
      </section>
    );
  }
});

export default App;
