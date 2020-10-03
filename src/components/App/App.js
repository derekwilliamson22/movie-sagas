import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from './MovieList/MovieList';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <h1>Movies!</h1>
          <h3>"I didn't go to film school, I went to films." - Quentin Tarantino</h3>
        </header>
          <Route exact path="/">
            <MovieList />
          </Route>         
        <p>Empty Page</p>
      </div>
      </Router>
    );
  }
}

export default App;
