import React from "react";

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Loader",
      apiLoad: false,
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  componentDidMount() {
    this.setState({
      message: "update did mount",
      apiLoad: true,
    });
  }
  async updateMessage() {
    fetch("/api")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          message: data.message,
          apiLoad: true,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}!</h1>
        <button onClick={this.updateMessage}>Update message!</button>
      </div>
    );
  }
}

export default HelloWorld;
