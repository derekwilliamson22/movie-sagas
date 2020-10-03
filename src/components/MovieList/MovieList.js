import React, { Component } from 'react';

class MovieList extends Component{
        render(){
            return(
                <div>
                  <Route path="/form">
                    <MovieForm />
                  </Route>
                  <Route path="details">
                    <MovieDetails />
                  </Route>
                  <Route path="edit">
                    <EditDetails />
                  </Route>
                </div>
            )
        }
}

export default MovieList