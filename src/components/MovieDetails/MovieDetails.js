import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieDetailsItem from '../MovieDetailsItem/MovieDetailsItem';

// import EditDetails from '../EditDetails/EditDetails';

class MovieDetails extends Component{
 

  editMovieDetails = (movieId) => {
    console.log('In edit movieDetails:', movieId);
    this.props.history.push(`/edit/${movieId}`)
  }
  // componentDidMount = () => {
  //   this.getMovieDetails();
  // }
    // this.getMovieGenres();
  

  //Looked into react router params
  //https://learn.co/lessons/react-router-params
  

    // getMovieDetails = () => {
    //   this.props.dispatch({
    //     type: "FETCH_DETAILS",
    //     payload: this.props.match.params.id
    //   })
    // }

    // getMovieGenres = () => {
    //   this.props.dispatch({
    //     type: "FETCH_MOVIE_GENRES",
    //     payload: this.props.match.params.id
    //   })
    // }

    render(){
      console.log('what is props', this.props.reduxState.details);
            
        return(
          <div>
          {this.props.reduxState.details.map((detail, index) =>
            <MovieDetailsItem 
              key={index}
              movieId={detail.id}
              movieTitle={detail.title}
              moviePoster={detail.poster}
              movieDescription={detail.description}
              onClick={()=>this.editMovieDetails(this.props.movieId)}
              />
          )}
          </div>
        )
      }
  
}


const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(MovieDetails);