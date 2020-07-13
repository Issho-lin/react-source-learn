// import React, {Component} from "react";
// import ReactDOM from "react-dom";

import React, { Component } from './mini-react'
import ReactDOM from './mini-react/react-dom'
import "./index.css";

function FunctionComponent(props) {
  return (
    <div className="border">
      FunctionComponent-{props.name}
      <button
        onClick={() => {
          console.log("omg"); //sy-log
        }}>
        click
      </button>
    </div>
  );
}

class ClassComponent extends Component {
  static defaultProps = {
    color: "green",
    name: '这是defaultProps'
  };
  render() {
    return (
      <div className="border">
        ClassComponent-{this.props.name}
        <p className={this.props.color}>color</p>
      </div>
    );
  }
}

const jsx = (
  <div className="border">
    <p>hello</p>
    <a href="https://www.kaikeba.com/">mini-react</a>
    <FunctionComponent name="function" />
    <ClassComponent name="lin" color="red"/>

    {[1, 2, 3, 4, 5].map(item => (
      <React.Fragment key={item}>{item}</React.Fragment>
    ))}

    <>
      <h1>1</h1>
      <h2>2</h2>
    </>
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

//多个节点
// fragment
