import React, { Component } from "react";

class DailyFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [],
    };
  }

  render() {
    return (
        <div className = "border border-gray-200 border-4 m-1 w-1/2">
            <h1 className="text-4xl">Today's foods</h1>
            {this.props.dailyFoods.map((food, index) => {
                return (
                  <li key={index}>
                    {food.quantity + " " + food.name + " = " + food.calories * food.quantity + " cal"} <br/>
                  </li>
                )})}
            <footer>Total: {this.props.dailyFoods.reduce( (acc, curr) => acc + (curr.quantity * curr.calories || 0),0)} cal</footer>
        </div>
    );
  }
}

export default DailyFood;