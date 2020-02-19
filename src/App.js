import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      phone: "",
      items: []
    };
  }

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  addContact = e => {
    e.preventDefault();
    let items = [...this.state.items];

    items.unshift({
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone
    });

    this.setState({
      items,
      name: "",
      age: "",
      phone: ""
    });
  };
  onReset = () => {
    this.setState({
      name: "",
      age: "",
      phone: ""
    });
  };

  onDelete = key => {
    var array = [...this.state.items];
    array.splice(key, 1);
    this.setState({ items: array });
  };

  render() {
    return (
      <div className="App">
        <ContactForm
          name={this.state.name}
          age={this.state.age}
          phone={this.state.phone}
          handleInputChange={this.handleInputChange}
          addContact={this.addContact}
          onReset={this.onReset}
        />
        {this.state.items.length > 0 ? (
          <ContactList items={this.state.items} onDelete={this.onDelete} />
        ) : null}
      </div>
    );
  }
}

export default App;
