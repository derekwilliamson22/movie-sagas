import React, { Component } from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';




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
      type: "FETCH_ALL_MOVIES"
    })
  }

    render(){
      return(
          <div className="Container">
            <h2>Movie Library</h2>
            {this.props.reduxState.movies.map((movie, index) =>
            <MovieItem 
              key={index}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={movie.poster}
              movieDescription={movie.description}
              />
            )}          
          </div>
      );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(MovieList));