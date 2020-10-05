// imports for components/methods
import React, { Component } from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';


// MATERIAL UI COMPONENTS
import Grid from '@material-ui/core/Container';



class MovieList extends Component{

  // initiates on page load
  // retrieves all movies from "movies" db
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


  // decided to pass props, rather than reduxState
  render(){
    return(
        
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        >
          <Grid item xs={12}>
          <h2>Movie Library</h2>
          <h3>Click on a Poster to Learn More</h3>
          </Grid>

          {this.props.reduxState.movies.map((movie, index) =>
            
            <Grid item xs={4}>
              <MovieItem 
                key={index}
                movieId={movie.id}
                movieTitle={movie.title}
                moviePoster={movie.poster}
                movieDescription={movie.description}
              />
            </Grid>
          )}
         
        </Grid>   
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(MovieList));