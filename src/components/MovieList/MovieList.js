import React, { Component } from 'react';
import {connect } from 'react-redux';

class MovieList extends Component{

  // initiates on page load
  componentDidMount = () => {
    console.log('Welcome to the Movies!');
    this.getMovies();
  }

  // dispatch request to sagas to get movies from db
  getMovies = () => {
    console.log(`Let's get all the movies!`);
    this.props.dispatch({
      type: "GET_ALL_MOVIES"
    })
  }

  onMovieDetails = (movieId) => {
  // this.props.history.push(`/details/${movieId}`);

  }

  render(){
      return(
          <div className="Container">
            {this.props.movies.map((movie, index) => 
            <div 
            key={movie.id}
            onClick={this.onMovieDetails(movie.id)}>
              <img src={movie.poster} />
            </div>
            )}         
          </div>
      )
  }
}

const mapStateToProps = (reduxStore) => ({
  movies: reduxStore.movies
});

export default connect(mapStateToProps)(MovieList);