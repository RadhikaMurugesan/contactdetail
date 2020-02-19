import React, { Component } from 'react';
import './styles.css';
export default function ContactList (props) {
    
    onClickRow = () => {
        return(

        )
    }
   
        const items = props.items;
        console.log('props', items);
        return(
            <div className="container">
             
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
                {items.map((item,key) => {
                    console.log('key', key);
                    
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.phone}</td>
                      <td><button onClick={props.onDelete(key)}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
           
  
    
}