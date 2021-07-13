import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.name,
        quantity: 1,
    };
  }

  handleOnChange = (event) => {
    if (event.target.value >= 0) {
        const { value } = event.target;
        this.setState({
            quantity: Number(value),
        })
    }
  }

  handleOnClick = () => {
    this.props.onAddIngredient(this.props,this.state.quantity);
  }

  render() {
    return (
        <div className="container mx-auto px-4">
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img className="w-20" src={this.props.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} onChange={this.handleOnChange} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.handleOnClick}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
  }
}

export default FoodBox;