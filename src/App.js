import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    text: "Type here!",
    array: ["Type", "here!"],
    length: null,
    showString: true
  };

  changeHandler = event => {
    let inputText = [...this.state.text];
    inputText = event.target.value;

    let inputArray = inputText.split(" ").map(str => str.trim());

    let inputLength = inputArray.length;

    console.log(inputArray);

    this.setState({
      length: inputLength,
      array: inputArray,
      text: inputText
    });
  };

  removeHandler = (event, str) => {
    console.log(str);
    let array = [...this.state.array];
    const stringIndex = array.findIndex(s => {
      return s === str;
    });

    array.splice(stringIndex, 1);
    let text = array.join(" ");
    console.log(text);

    // let show = this.state.showString;
    this.setState({
      array: array,
      text: text
    });
  };

  renderCharComponent = () => {
    return (
      <div>
        {this.state.array.map((string, index) => {
          return (
            <div key={index}>
              <CharComponent
                click={event => this.removeHandler(event, string)}
                str={string}
              />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const style = {
      border: "3px solid yellow"
    };
    return (
      <div className="App">
        <p>{this.state.text}</p>
        <input
          type="text"
          onChange={event => this.changeHandler(event)}
          value={this.state.text}
        />
        <p>Length:{this.state.length} </p>

        <ValidationComponent length={this.state.length} />
        {this.renderCharComponent()}
      </div>
    );
  }
}

export default App;
