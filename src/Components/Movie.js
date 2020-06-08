import React, { Component } from 'react';
import './Movie.css';

const axios = require('axios');

export class Movie extends Component {
  constructor()
  {
    super();
    this.state = { src: '', title: '', imdb: '', plot: '', director: ''}
  }


  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.shouldUpdate !== prevState.shouldUpdate){
      this.render();
    }
    if(this.props.movie !== prevProps.movie) {
      this.render();
    }
  }


  render() {
    return(
      <div className='frame'>
        <img src={this.props.src}
          onClick={this.props.enlarge.bind(this, this.props.src, this.props.title, this.props.director, this.props.imdb, this.props.plot, this.props.movie)} alt={this.state.title}/>
      </div>      
    );
  }
}
export default Movie;