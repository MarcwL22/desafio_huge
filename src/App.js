import React, { Component } from "react";
import data from "./resources/nav.json";

let logo = require("./resources/images/HUGE-white.png");

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      showLogo: '',
      btnText: true
    };
  }

  _dynId = (i) => {
    return "drop-" + i;
  }

  onCheck = (e) => {
    if(e.target.checked === true) {
      this.setState({ showLogo: "inline", btnText: false})
    }
    else {
      this.setState({ showLogo: "", btnText: true})
    }
  }

  _renderArrow = dt => {
    // console.log(dt);
    if(dt.items != '') {
      return (
        <div className="arrow">
          <i></i>
        </div>
      );
    }
    else {
      return null;
    }
  }

  render() {
    // console.log(this.state.btnText);
    let {data, showLogo, btnText} = this.state;
    return (
      <div>
        <input type="checkbox" id="menu" name="menucheckbox" onClick={this.onCheck} className="hide" />
        <header id="header">
          <div id="btn-menu" className={showLogo}>
            <img src={logo} alt="Logo" className="second-logo" id="logo"/>
            <label htmlFor="menu" id="btn-menu-hamburguer" className="btn-hamburguer">
               {btnText
               ? <span>&#9776;</span>
               : <span>&#9747;</span>}
            </label>
          </div>
          <nav id="menu">
            <img src={logo} alt="Logo" className="logo" />
            <ul>
              {data.items.map((dt,i) =>
                <li key={i}>
                  <label htmlFor={this._dynId(i)} className="toggle">
                    {dt.label}
                    {this._renderArrow(dt)}
                  </label>
                  <a href={dt.url}>{dt.label}</a>
                  <input type="checkbox" id={this._dynId(i)}/>
                  <ul>
                    {dt.items.map((dt2,i) =>
                    <li key={i}>
                      <a href={dt2.url}>{dt2.label}</a>
                    </li>)}
                  </ul>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <section id="content">
          <div className="row">
            <h1>Get paid for giving a shit.</h1>
            <p>
              {data.text}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
