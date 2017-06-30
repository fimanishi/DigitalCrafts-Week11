import React, { Component } from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class ContactsList extends Component{
  render(){
    return (
      <ul key>
      {Object.keys(this.props.contact).map((b)=> this.props.contact.visible && b !== "visible" ?
        <li key={b}>{capitalizeFirstLetter(b)}: {this.props.contact[b]}</li> :
        (b === "name" || b === "email" || b === "phone" ? <li key={b}>{capitalizeFirstLetter(b)}: {this.props.contact[b]}</li> : null)
      )}
      </ul>
    )
  }

}

export default ContactsList;
