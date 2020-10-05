import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieForm extends Component{

  state = {
    newMovie: {
      title: '',
      description: '',
      poster: '',
      genre: ''
    }
  }

  componentDidMount = () =>{
    console.log(this.props.reduxState.genres);
    
  this.getAllGenres();
  }

  getAllGenres = () => {
    this.props.dispatch({
      type: 'FETCH_ALL_GENRES',
    })
  }

  returnToMain = () => {
    this.props.history.push('/')
  }

  handleChangeFor = (property, event) => {
    console.log('event happened', event.target.value);
    this.setState({
        newMovie: {
            ...this.state.newMovie,
            [property]: event.target.value
        }
    })
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'ADD_MOVIE',
      payload: this.state.newMovie
    })
  }


  render(){
    console.log('whats is genres info', this.props.reduxState);
    
      return(
          <div>
            <div>
              <button onClick={()=>this.returnToMain()}>Cancel</button>
              <button onClick={this.handleClick}>Save Movie</button>
            </div>
            <div>
            <input 
              type='text'
              placeholder="Movie Title"
              value={this.state.newMovie.title} 
              onChange={(event) => this.handleChangeFor('title', event)}/>
            <input 
              type='text'
              placeholder="Movie Description"
              value={this.state.newMovie.description} 
              onChange={(event) => this.handleChangeFor('description', event)}/>
            <input 
              type='text'
              placeholder="Movie POSTER URL"
              value={this.state.newMovie.poster} 
              onChange={(event) => this.handleChangeFor('poster', event)}/>
             <select onChange={(event) => this.handleChangeFor("genre", event)}>
              {this.props.reduxState.genres.map((genre, index) => 
              <option key={index} value={`${genre.id}`}>{genre.name}</option>)}
            </select>
            </div>
          </div>
      )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(MovieForm));