import React, { Component } from "react";


class AddFoodForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            calories: 0,
            image: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState( {
            [name]: value,
        });
    }

    handleSubmitForm = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="">
                <h1 className="">Add a new food item...</h1>
                <label >Name</label>
                <input type="text" name="name" onChange={this.handleChange}/><br/>
                <label >Calories</label>
                <input type="text" name="calories" onChange={this.handleChange}/><br/>
                <label >Image</label>
                <input type="text" name="image" onChange={this.handleChange}/><br/>
                <button className="border border-black" onClick={this.handleSubmitForm}>Add item!</button>
            </div>
        )
    }
}

export default AddFoodForm;