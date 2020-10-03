import React, { Component } from 'react';
import {connect} from 'react-redux';
// import EditDetails from '../EditDetails/EditDetails';

class MovieDetails extends Component{
    render(){
      return(
        <div>
          <h1>MovieDetails</h1>
            <div> 
              {/* // className="Movie-poster"
              // key={this.props.id}>
              // <h3>{this.props.title}</h3>
              // <img 
              // src={this.props.poster}
    
              // /> */}
              </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
  movies: reduxStore.movies
});

export default connect(mapStateToProps)(MovieDetails);