import React, { Component } from "react";
import "./styles.css";
export default function ContactList(props) {
  const items = props.items;
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          {items.map((item, key) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                  <button className="btn" onClick={() => props.onDelete(key)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
