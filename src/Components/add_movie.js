import React, { Component } from 'react';
import config from '../config.js';
import './Movie.css';


const axios = require('axios');
const firebase = require('firebase')


export class add_movie extends Component {
  constructor(props) {
    super();
    this.state = { movId: '', src: '', title: '', director: '', imdb: '',plot: '',actors: '',}
  }

  componentDidMount(){
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  myFormHandler = (event) => {
    event.preventDefault();
    let req = 'https://www.omdbapi.com/?apikey=aeddd447&i='+this.state.movId;
    this.getMovieName(this, req);
  }

  inputHandler = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({[field]: value});
  }

  updateDb(obj) {
    console.log(obj.state.actors);
    let formObj = {
      name: obj.state.title,
      src: obj.state.src,
      director: obj.state.director,
      imdb: obj.state.imdb,
      plot: obj.state.plot,
      actors: obj.state.actors,
    };
    let ref = firebase.database().ref('movies');
    ref.once('value').then(function(snapshot) {
      let movExists = snapshot.child(obj.state.movId).exists();
      if(movExists) {
        alert('Already existed');
      } 
      else {
        ref.child(obj.state.movId).set(formObj);
        alert('Movie has been add');
      }
    });
  }

  getMovieName(obj, req) {
    axios.get(req)
    .then(function (response) {
      obj.setState({
        src: response.data.Poster,
        title: response.data.Title,
        director: response.data.Director,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
        actors: response.data.Actors,
      });
    })
    .then(function () {
      obj.updateDb(obj);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.myFormHandler}>
          <h1>Add a New Movie</h1>
          <h3>Movie ID</h3>
          <input name='movId' type='text'  required onChange={this.inputHandler}></input><br/>
          <div className="color_grey"><h5>* Please give the imdbID of the movie</h5> </div>
          <div className="submit"><input type='submit' name='submit' value='SUBMIT' style={{width: "300px"}}></input></div>
          
        </form>
      </div>      
    );
  }
}
export default add_movie;