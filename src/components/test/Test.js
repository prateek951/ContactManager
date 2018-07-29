import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: " "
  };

  componentDidMount() {
    console.log("inside the componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          body: data.body
        });
      });
  }
  componentWillMount() {
    console.log("inside the componentWillMount...");
  }
  componentDidUpdate() {
    console.log("inside the componentDidUpdate...");
  }
  componentWillUpdate() {
    console.log("inside the componentWillUpdate");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("inside the componentWillReceiveProps");
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>This is the test component!</h1>
        <hr/>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
