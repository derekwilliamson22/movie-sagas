import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieDetailsItem extends Component{


  // editMovieDetails = (movieId) => {
  //   console.log('In edit movieDetails:', movieId);
  //   this.props.history.push(`/edit/${movieId}`)
  // }



        render(){
            return(
                <div>
                    <h1>MovieDetailsItem</h1>
                    <img src={this.props.moviePoster}/>
                    <button onClick={()=>this.editMovieDetails(this.props.movieId)}>Edit Details</button>

                </div>
            )
        }
}

export default withRouter(connect()(MovieDetailsItem));