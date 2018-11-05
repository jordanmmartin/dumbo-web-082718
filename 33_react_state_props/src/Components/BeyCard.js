import React from "react";

class BeyCard extends React.Component {

  state = {
    favorite: false
  }

  handleFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    })
  }


  render(){
    if ((this.props.filter === 'all') || this.state.favorite){
      return (
        <div>
          <h1>{this.props.beyObj.name}</h1>
          <button onClick={this.handleFavorite}>{this.state.favorite ? '⭐️' : 'Favorite Me!'}</button>
          <br />
          <img src={this.props.beyObj.img} alt="" onClick={this.props.clickHandler} />
          <br />
          <button onClick={this.props.handleDelete}>Delete</button>
        </div>
      )
    } else {
      return null
    }
  }
};

export default BeyCard;
