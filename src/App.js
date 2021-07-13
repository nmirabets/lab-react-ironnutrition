import { Component } from 'react';
// import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import SearchBar from './components/SearchBar.jsx';
import DailyFood from './components/DailyFood.jsx';
import AddFoodForm from './components/AddFoodForm.jsx';
import React from 'react';

class App extends Component {
  state = {
    filter: "",
    foodList: [...foods],
    dailyFoods: [],
    showAddFoodForm: false,
  }

  handleOnClick = () => {
    const AddFoodFormIsActive = !this.state.showAddFoodForm;
    this.setState({ 
      showAddFoodForm: AddFoodFormIsActive,
    })
  }

  showFoodListOrForm = () => {
    if (this.state.showAddFoodForm) {
      return <AddFoodForm onSubmit= {this.handleOnSubmitForm}/>
    } else {
      return <DailyFood dailyFoods={this.state.dailyFoods} />
    }
  }

  handleOnSubmitForm = (newFood) => {

    const newFoodList = [...this.state.foodList];
    newFoodList.push(newFood);

    this.setState({
      foodList: newFoodList,
      showAddFoodForm: false,
    })
  }

  handleOnChange = (event) => {
    this.setState({
      filter: event.target.value.toLowerCase(),
    })
  }

  handleAddIngredient = (props,quantity) => {

    const newItem = {
      name: props.name,
      calories: props.calories,
      quantity: quantity,
    }

    const newDailyFoods = [...this.state.dailyFoods];

    newDailyFoods.push(newItem);

    this.setState({
      dailyFoods: newDailyFoods
    })

  }

  render() {
    const filterList = this.state.foodList.filter((food) =>
      food.name.toLowerCase().includes(this.state.filter)
  );
    return (
      <div className="container mx-auto px-4">
        <header>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        </header>
        <h1 className="text-4xl">Iron Nutrition</h1>
        <div>
          <SearchBar value={this.state.filter} onChange={this.handleOnChange}/>
          <button className="border border-black mx-auto px-4 " onClick={this.handleOnClick}>Add New Food Item</button>
          <div className="container mx-auto px-4 flex flex-row">
            <div className="w-1/2" >
              {filterList.map((food, index) => {
                return (
                    <FoodBox
                      name={food.name}
                      quantity={food.quantity}
                      calories={food.calories}
                      image={food.image}
                      key={index}
                      onAddIngredient={this.handleAddIngredient}
                    />
                )})}
            </div>
            {this.showFoodListOrForm()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;