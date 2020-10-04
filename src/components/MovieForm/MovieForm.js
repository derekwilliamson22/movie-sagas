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
    this.getAllGenres();
  }

  getAllGenres = () => {
    this.props.dispatch({
      type: 'FETCH_ALL_GENRES',
    })
  }

  handleChangeFor = (property, event) => {
    console.log('event happened');
    this.setState({
        newMovie: {
            ...this.state.newMovie,
            [property]: event.target.value
        }
    })
}


  render(){
      return(
          <div>
            <div>
              <button>Cancel</button>
              <button>Save Movie</button>
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
             <select onChange={ ( event ) => this.handleChangeFor( event, "genre" ) }>
              {this.props.reduxState.genres.map((genre, index) => 
              <option key={index}>{genre.name}</option>)}
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