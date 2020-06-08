import React, { Component } from 'react';
import config from '../config.js';
import './Movie.css';


const firebase = require('firebase')

export class create_list extends Component {
  constructor(props) {
    super();
    this.state = {
      listName: '',
    }
  }

  componentDidMount(){
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  myFormHandler = (event) => {
    event.preventDefault();
    let formObj = {
      name: this.state.listName, 
    };
    firebase.database().ref('lists').push().set(formObj);
    alert("List has been created");
  }

  myChangeHandler = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({[field]: value});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.myFormHandler}>
          <h1>Create a new list</h1>
          <h3>List Title</h3>
          <input name='listName' type='text'  required onChange={this.myChangeHandler}></input><br/>
          <div className="color_grey"><h5>* Please enter a title for the new list.</h5> </div>
          <div className="submit"><input type='submit' name='submit' value='SUBMIT' style={{width: "300px"}}></input></div>
        </form>
      </div>       
    );
  }
}
export default create_list;