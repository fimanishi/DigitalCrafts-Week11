import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component{
  constructor (props){
    super(props);
    this.state = {person: {name: "", email: "", phone: "", address: "", city: "", state: "", zipcode: ""}, contacts: [],};
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
    this.setState({contacts: contactsUpdated});
    return(
    <Results contacts={this.state.contacts} />
    )
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
        </div>
      </div>
    )
  }
}

function Results(props) {
  console.log("test");
  return (

    <ul>
      <li>{props.contacts[0].name}</li>
    </ul>
  )
}

export default Form;
