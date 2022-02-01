import React from "react";

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "my friend (from state)!",
      apiLoad: false,
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.loadApi();
    this.state = {
      message: "my friend (changed)!",
      apiLoad: false,
    };
  }

  async loadApi() {
    const response = await fetch("/api");
    this.setState({
      message: response.body,
      apiLoad: true,
    });
  }

  render() {
    function sayHello() {
      alert("Hello, World from Nibbles!");
    }

    function sayApi() {
      alert("Hello, World from API!");
    }
    return (
      <div>
        <h1>Hello {this.state.message}!</h1>
        <button onClick={this.updateMessage}>Update message!</button>
        <button onClick={sayHello}>Show dialog!</button>
        <p>{this.props.message}</p>
        <p>API Load: {this.state.apiLoad}</p>
        <button onClick={sayApi}>Show dialog!</button>
      </div>
    );
  }
}

export default HelloWorld;
