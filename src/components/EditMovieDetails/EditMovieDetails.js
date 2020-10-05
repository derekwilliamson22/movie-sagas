import React, { Component } from 'react';
import { connect } from 'react-redux';



class EditMovieDetails extends Component{


  render(){
    return(
        <div>
          <h1>EditDetails</h1>
        </div>
    )
  }
}

export default connect()(EditMovieDetails);