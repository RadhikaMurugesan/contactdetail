import React, { Component } from "react";
import "./styles.css";

export default function ContactForm(props) {
  return (
    <div>
      <h3>Contact Form</h3>
      <div>
        <div className="row">
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="row">
          <p>Age</p>
          <input
            type="text"
            name="age"
            value={props.age}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="row">
          <p>Phone</p>
          <input
            type="text"
            name="phone"
            value={props.phone}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="btnRow">
          <button onClick={props.addContact}>Add</button>
          <button onClick={props.onReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
