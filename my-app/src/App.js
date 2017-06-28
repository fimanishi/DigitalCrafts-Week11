import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
  constructor(props){
    super(props);
    this.state = {friends: [{name: "Felipe", age: 30}, {name: "Thiago", age: 31}, {name: "Mundinho", age:19}]};
  }
  render() {
    return (
      <div>
        <p>test</p>
        <ul>
          {this.state.friends.map((p) => {
              if(p.age > 21){
                return (
                  <li>
                    {p.name}
                  </li>
                )
              }
          })}
        </ul>
      </div>
    );
  }
}

export default Hello;
