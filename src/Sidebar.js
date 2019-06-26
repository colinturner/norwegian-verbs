import React, { Component } from "react";
import data from "./data";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
        {data.map(verb => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => this.props.switchVerb(verb.infinitive)}
            >
              {verb.infinitive}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
