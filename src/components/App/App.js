import React, { Component } from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieForm from '../MovieForm/MovieForm';
import EditMovieDetails from '../EditMovieDetails/EditMovieDetails'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <h1>Movies!</h1>
            <h3>"I didn't go to film school, I went to films." - Quentin Tarantino</h3>
            <Link to="/">Movie Library</Link>
            <Link to="/form">Add a Movie</Link>
          </header>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/details/:id">
              <MovieDetails />
            </Route>
            <Route path="/edit/:id">
              <EditMovieDetails />
            </Route> 
            <Route path="/form">
              <MovieForm />
            </Route> 
        </Router>
      </div>
    );
  }
}


export default App;
