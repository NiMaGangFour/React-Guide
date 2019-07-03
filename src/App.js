import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import UserInput from "./Component/UserInput";
import UserOutput from "./Component/UserOutput";

class App extends Component {
  state = {
    userDetail: [
      { username: "SiyuDota2", action: "Playing Carry" },
      { username: "Xiao Ming", action: "Escaping" },
      { username: "Wang Nima", action: "Roshaning" }
    ]
  };

  changeUsernameHandler = () => {
    this.setState({
      userDetail: [
        { username: "SiyuLOL", action: "Playing Carry" },
        { username: "Xiao WangBa", action: "Escaping" },
        { username: "Wang Ergou", action: "Roshaning" }
      ]
    });
  };

  switchActionHandler = () => {
    this.setState({
      userDetail: [
        { username: "SiyuLOL", action: "Coding one by one" },
        { username: "Xiao WangBa", action: "Warding" },
        { username: "Wang Ergou", action: "Chasing" }
      ]
    });
  };

  inputHandler = event => {
    this.setState({
      userDetail: [
        { username: event.target.value, action: "Coding one by one" },
        { username: "Xiao WangBa", action: "Warding" },
        { username: "Wang Ergou", action: "Chasing" }
      ]
    });
  };

  render() {
    const style = {
      border: "3px solid yellow"
    };
    return (
      <div className="App">
        <button style={style} onClick={() => this.switchActionHandler()}>
          A Button
        </button>
        <UserInput
          username={this.state.userDetail[0].username}
          inputHandler={this.inputHandler.bind(this)}
        />
        <UserOutput
          click={this.changeUsernameHandler}
          username={this.state.userDetail[0].username}
          action={this.state.userDetail[0].action}
          person="Siyu"
        />
        <UserOutput
          username={this.state.userDetail[1].username}
          action={this.state.userDetail[1].action}
          person="Spec"
        />
        <UserOutput
          click
          username={this.state.userDetail[2].username}
          action={this.state.userDetail[2].action}
          person="lazy Siyu"
        />
      </div>
    );
  }
}

export default App;
