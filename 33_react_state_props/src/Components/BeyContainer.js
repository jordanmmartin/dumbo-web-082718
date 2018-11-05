import React, { Component } from "react";
import BeyCard from "./BeyCard";
import BeyForm from "./BeyForm";
// import { BeyImages, JayImages } from "../images";

class BeyContainer extends Component {
  state = {
    renderOrNah: true,
    filter: 'all',
    objects: []
  };

  clickHandler = () => {
    console.log("in clickHandler");
    this.setState({
      renderOrNah: !this.state.renderOrNah
    });
  };


  submitHandler = (e, obj) => {
    e.preventDefault();
    console.log("logging", obj);
    //spread operator
    //accomplishes the same thing as a push() but rather than using the same array and changing the content, which js will not recognize as a new array. We are creating a brand new array and then adding the object to that new array
    let newArray = [...this.state.beyImages, obj];
    this.setState({
      beyImages: newArray
    });
  };

  handleChange = (e) => {
    let newState = ''
    if (e.target.value === 'all') {
      newState = 'all'
    } else {
      newState = 'favorite'
    }
    this.setState({
      filter: newState
    })
  }

  handleDelete = () => {
    console.log('state', this.state.objects);
    console.log('props', this.props.beyObjects);
  }

  componentDidMount() {
    this.setState({
      objects: this.props.beyObjects
    })
  }

  // beyCards() {
  //   return BeyImages.map(beyObj => <BeyCard />);
  // }
  render() {
    let beyCards = this.props.beyObjects.map(beyObj => (
      <BeyCard
        key={beyObj.name}
        beyObj={beyObj}
        clickHandler={this.clickHandler}
        handleFavorite={this.handleFavorite}
        filter={this.state.filter}
        handleDelete={this.handleDelete}
      />
    )); //[<BeyCard />, <BeyCard />, ...]
    return (
      <div>
        <select defaultValue={this.state.filter} onChange={this.handleChange}>
          <option value='all'>All</option>
          <option value='favorite'>Favorite</option>
        </select>
        <BeyForm submitHandler={this.submitHandler} />
        {this.state.renderOrNah ? (
          beyCards
        ) : (
          <h1 onClick={this.clickHandler}>FullSnack Devs</h1>
        )}
      </div>
    );
  }
}

export default BeyContainer;
