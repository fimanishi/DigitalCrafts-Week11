import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import "./form.css"
import ContactsList from "./contactslist"

class Form extends Component{
  constructor (props){
    super(props);
    this.state = {person: {name: "", email: "", phone: "", address: "", city: "", state: "", zipcode: "", visible: false, id: 0},
    contacts: [{name: "Felipe", email: "fimanishi@gmail.com", phone: "3375345424", address: "2525 S Voss Rd, apt 219", city: "Houston", state: "Texas", zipcode: "77057", visible: false, id: 1},
  {name: "Lauren", email: "laurenrkim@gmail.com", phone: "3372819071", address: "2525 S Voss Rd, apt 219", city: "Houston", state: "Texas", zipcode: "77057", visible: false, id: 2}],};
}


  update_state(event){
    // if (event.target.id === "phone"){
    //   var phone = event.target.value;
    //   var numbers = phone.replace(/[\D]*/g, "");
    //   if (numbers.length === 3){
    //     this.setState({[event.target.id]: "(" + event.target.value + ")"});
    //   }
    //   else if(numbers.length === 6 && event.target.value.length < ){
    //     this.setState({[event.target.id]: event.target.value + "-"});
    //   }
    //   else if(numbers.length > 10){
    //     this.setState({[event.target.id]: event.target.value.slice(0,13)});
    //   }
    //   else{
    //     this.setState({[event.target.id]: event.target.value});
    //   }
    // }
    // else{
    let newAssignment = Object.assign({}, this.state.person);
    newAssignment[event.target.id] = event.target.value;
    if (this.state.person.id === 0 && this.state.contacts.length > 0){
      newAssignment["id"] = this.state.contacts[this.state.contacts.length-1].id + 1;
    }
    else if (this.state.person.id === 0){
      newAssignment["id"] = 1;
    }
    this.setState({person: newAssignment});

    // }
  }

  validation(event){
    if(event.target.id === "email"){
      var re = /[\w\d.]+@[\w\d]+\.[\w\d]+/g;
      var email = re.exec(event.target.value);
      if (!email){
        let newAssignment = Object.assign({}, this.state.person);
        newAssignment[event.target.id] = "";
        this.setState({person: newAssignment});
      }
    }
    else if(event.target.id === "phone"){

    }
  }

  handle_submit(event){
    event.preventDefault();
    var contactsUpdated = this.state.contacts.slice();
    contactsUpdated.push(this.state.person);

    var ordered = [];
    contactsUpdated.forEach(function(item){
      var added = false;
      if (ordered.length === 0){
        ordered.push(item);
        added = true;
      }
      else{
        for(var i=0; i<ordered.length; i++){
          if(item.name < ordered[i]["name"]){
            ordered.splice(i, 0, item);
            added = true;
            break;
          }
        }
      if(!added){
        ordered.push(item);
      }
      }
    })
    this.setState({contacts: ordered});
    return this.clear_fields()
  }

  clear_fields(){
    var newAssignment = {name: "", email: "", phone: "", address: "", city: "", state: "", zipcode: "", visible: false, id: 0};
    this.setState({person: newAssignment});

  }

  handle_click(event, index){
    let newAssignment = this.state.contacts.slice();
    newAssignment[index]["visible"] = !this.state.contacts[index]["visible"];
    this.setState({contacts: newAssignment});
  }

  delete_click(event, id){
    let newAssignment = this.state.contacts.slice();
    for (var i = 0; i < this.state.contacts.length; i ++){
      if (this.state.contacts[i].id === id){
        break
      }
    }
    newAssignment.splice(i,1);
    this.setState({contacts: newAssignment})

  }


  render(){
    return (
      <div>
        <form onSubmit={event => this.handle_submit(event)}>
          <Card className="md-card">
            <CardTitle title="Contact Form" subtitle="Enter your information here"/>
            <CardText>
              <TextField id="name" floatingLabelText="Name" value={this.state.person.name} onChange={event => this.update_state(event)}/>
              <br/>
              <TextField id="email" floatingLabelText="Email" value={this.state.person.email} onChange={event => this.update_state(event)} onBlur={event => this.validation(event)}/>
              <br/>
              <TextField id="phone" floatingLabelText="Phone Number" value={this.state.person.phone} onChange={event => this.update_state(event)} onBlur={event => this.validation(event)}/>
              <br/>
              <TextField id="address" floatingLabelText="Address" value={this.state.person.address} onChange={event => this.update_state(event)} onBlur={event => this.validation(event)}/>
              <br/>
              <TextField id="city" floatingLabelText="City" value={this.state.person.city} onChange={event => this.update_state(event)} onBlur={event => this.validation(event)}/>
              <br/>
              <TextField id="state" floatingLabelText="State" value={this.state.person.state} onChange={event => this.update_state(event)} onBlur={event => this.validation(event)}/>
              <br/>
              <TextField id="zipcode" floatingLabelText="Zipcode" value={this.state.person.zipcode} onChange={event => this.update_state(event)} onBlur={event => this.validation(event)}/>
            </CardText>
            <CardActions>
              <RaisedButton label="submit" type="submit" primary={true}/>
            </CardActions>
          </Card>
        </form>
        <div id="results">
            {this.state.contacts.length === 0 ? <div style={{textAlign: 'center',}}><h2>No contacts stored</h2></div> : this.state.contacts.map((p, index) =>
              <div className="contact" key={p.id}>
                <Card className="md-card list" onClick={event => this.handle_click(event, index)}>
                  <ContactsList contact={p}/>
                </Card>
                <RaisedButton label="delete" primary={true} onClick={event => this.delete_click(event, p.id)}/>
              </div>
            )}
        </div>
      </div>
    )
  }
}



export default Form;
