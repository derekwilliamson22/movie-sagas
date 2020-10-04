import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class MovieItem extends Component{

  
  getMovieDetails = (movieId) => {
    this.props.dispatch({
      type: "FETCH_DETAILS",
      payload: movieId
    })
    this.props.history.push(`/details/${movieId}`)
  }



        render(){
            return(
                <div>
                  <div className="Poster-container">
                    <img 
                    src={this.props.moviePoster}
                    alt={this.props.movieTitle}
                    onClick={()=>this.getMovieDetails(this.props.movieId)}
                    />
                  </div>
                  <div className="Details-container">
                    <h3>{this.props.movieTitle}</h3>
                    <p>{this.props.movieDescription}</p>
                  </div>
                </div>
            )
        }
}

export default withRouter(connect()(MovieItem));