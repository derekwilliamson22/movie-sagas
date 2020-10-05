// imports for components/methods
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// MATERIAL UI COMPONENTS
import Grid from '@material-ui/core/Container';
import Container from '@material-ui/core/Container';



class MovieItem extends Component{


  getMovieDetails = (movieId) => {
    this.props.dispatch({
      type: "FETCH_DETAILS",
      payload: movieId
    })
    this.props.dispatch({
      type: 'FETCH_DETAILS_GENRES',
      payload: movieId
    })
    this.props.history.push(`/details/${movieId}`)
    
  }

  render(){
    return(
      <>
        <img 
          src={this.props.moviePoster}
          alt={this.props.movieTitle}
          onClick={()=>this.getMovieDetails(this.props.movieId)}
          />
           
        {/* <Grid
          item
          xs={4} className="Details-container">
          <h3>{this.props.movieTitle}</h3>
          <p>{this.props.movieDescription}</p>
        </Grid> */}
      

      </>
        
    )
  }
}

export default withRouter(connect()(MovieItem));