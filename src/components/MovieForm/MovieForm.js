import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieForm extends Component{

  state = {
    newMovie: {
      title: '',
      description: '',
      poster: '/images/coming-soon-poster.jpg',
      genre: ''
    }
  }

  // functions run on page load
  componentDidMount = () =>{
    console.log(this.props.reduxState.genres);
    
  this.getAllGenres();
  }

  // calls the saga to get ALL genres in order to render below
  getAllGenres = () => {
    this.props.dispatch({
      type: 'FETCH_ALL_GENRES',
    })
  }

  // link to main page
  returnToMain = () => {
    this.props.history.push('/')
  }

  // capture keyboard or click events and updates state
  // to create a new movie to be sent to db
  handleChangeFor = (property, event) => {
    console.log('event happened', event.target.value);
    this.setState({
        newMovie: {
            ...this.state.newMovie,
            [property]: event.target.value
        }
    })
  }

  // sends newMovie item to db via saga
  handleClick = () => {
    this.props.dispatch({
      type: 'ADD_MOVIE',
      payload: this.state.newMovie
    })
    this.setState({
      newMovie: {
        title: '',
        description: '',
        poster: '',
        genre: ''
      }
    })
  }

  // I'm using a stand-in image for the url
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
             <select 
             onChange={(event) => this.handleChangeFor("genre", event)}>
              <option key="ChooseAGenre" value={`${0}`}>Select a genre</option> 
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