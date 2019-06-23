import React, { Component } from "react";
import Verb from "./Verb";
import Sidebar from "./Sidebar";
import data from "./data";
import { allVerbTenses } from "./constants";

class AppContainer extends Component {
  state = {
    data: data,
    index: 0
  };

  incrementIndex = () => {
    this.state.index < this.state.data.length - 1
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 });
  };

  eraseAnswer = format => {
    document.getElementById(`attempt-${format}`).value = "";
  };

  eraseForm = () => {
    allVerbTenses.forEach(tense => {
      this.markCorrect(tense);
      this.eraseAnswer(tense);
    });
  };

  markCorrect = format => {
    const attempt = document.getElementById(`attempt-${format}`);
    const correction = document.getElementById(`answer-${format}`);
    correction.innerText = "";
    attempt.style.border = "none";
  };

  switchVerb = selection => {
    let i = data.findIndex(verb => verb.infinitive === selection);
    this.setState({ index: i });

    this.eraseForm();
  };

  render() {
    return (
      <div className="App">
        <Sidebar switchVerb={this.switchVerb} />
        <Verb
          answer={data[this.state.index]}
          nextVerb={this.incrementIndex}
          eraseForm={this.eraseForm}
          markCorrect={this.markCorrect}
        />
      </div>
    );
  }
}

export default AppContainer;
