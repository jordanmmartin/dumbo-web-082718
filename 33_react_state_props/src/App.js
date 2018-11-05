import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./Components/BeyContainer";

class App extends Component {

  state = {
    beyObjects: [],
    jayObjects: []
  }



  getBey = () => {
    fetch('http://localhost:3001/bey')
    .then(r => r.json())
    .then(beyArray => this.setState({
      beyObjects: beyArray
    }))
  }

  getJay = () => {
    fetch('http://localhost:3001/jay')
    .then(r => r.json())
    .then(jayArray => this.setState({
      jayObjects: jayArray
    }))
  }

  componentDidMount(){
    this.getBey()
    this.getJay()
  }

  render() {
    return (
      <div>
      <div className='left-div'>
      <BeyContainer beyObjects={this.state.beyObjects}/>
      </div>
      <div className='right-div'>
      <BeyContainer beyObjects={this.state.jayObjects}/>
      </div>
      </div>
    )
  }
}

export default App;
