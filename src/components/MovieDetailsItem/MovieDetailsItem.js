import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



class MovieDetailsItem extends Component{

  returnToMain = () => {
    this.props.history.push('/')
  }

  render(){
    return(
      <div>
        <div>
          <img 
            src={this.props.moviePoster} 
            alt={this.props.movieTitle}/>
        </div>
        <div>
          <button 
            className="ToMainList"
            onClick={()=>this.returnToMain()}
            >BACK TO LIST
          </button>
          <button   
            // onClick={()=>this.editMovieDetails(this.props.movieId)}
            >Edit Details
          </button>
        </div>
        <div>
          <h3>Title: {this.props.movieTitle}</h3> 
          <h4>Description:</h4>
          <p>{this.props.movieDescription}</p>
          <h4>Genres: </h4>
          <ul>
            {this.props.reduxState.genres.map((genre, index) =>
              <li key={index}>{genre.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(MovieDetailsItem));