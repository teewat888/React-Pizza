import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      formId: 0,
      formTopping: "",
      formSize: "Small",
      formChecked: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          pizzas: data,
        });
      })
      .catch((e) => console.log(e));
  }

  fillEditForm = (pizza) => {
    this.setState({
      formId: pizza.id,
      formTopping: pizza.topping,
      formSize: pizza.size,
      formChecked: pizza.vegetarian,
    });
  };
  submitData = (id) => {
    const newPizza = this.state.pizzas.map((pizza) => {
      if (pizza.id === id) {
        return {
          id: id,
          topping: this.state.formTopping,
          size: this.state.formSize,
          vegetarian: this.state.formChecked,
        };
      } else return pizza;
    });
    this.setState({
      pizzas: newPizza,
    });
  };

  hTopping = (topping) => {
    this.setState({
      formTopping: topping,
    });
  };

  hSize = (size) => {
    this.setState({
      formSize: size,
    });
  };

  hVegetarian = (vegetarian) => {
    this.setState({
      formChecked: vegetarian,
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          id={this.state.formId}
          topping={this.state.formTopping}
          size={this.state.formSize}
          vegetarian={this.state.formChecked}
          submitData={this.submitData}
          hTopping={this.hTopping}
          hSize={this.hSize}
          hVegetarian={this.hVegetarian}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          fillEditForm={this.fillEditForm}
        />
      </Fragment>
    );
  }
}

export default App;
