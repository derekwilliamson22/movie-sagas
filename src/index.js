import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put, } from 'redux-saga/effects';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('FETCH_ALL_MOVIES', getAllMovies);
yield takeEvery('FETCH_DETAILS', getDetails);
yield takeEvery('FETCH_DETAILS_GENRES', getDetailsGenres);
yield takeEvery('FETCH_ALL_GENRES', getAllGenres);
}

// SAGA calls

// get all movies via sagas from db
function* getAllMovies(action) {
  console.log('Hit getAllMovies with', action);
  let response = yield axios({
    method: "GET",
    url: `/api/movie`
  });
  yield put({
    type: "SET_MOVIES",
    payload: response.data
  });
}

function* getAllGenres(action) {
  console.log('Hit getAllGenres with', action);
  let response = yield axios({
    method: "GET",
    url: `/api/genre`
  });
  yield put({
    type: "SET_GENRES",
    payload: response.data
  });
}

function* getDetails(action) {
  console.log('Hit getDetails with', action.payload);
  let response = yield axios({
    method: "GET",
    url: `/api/movie/details/${action.payload}`
  });
  yield put({
     type: "SET_DETAILS",
    payload: response.data
  });
}

function* getDetailsGenres(action) {
  console.log('Hit getGenres with', action);
  let response = yield axios({
    method: "GET",
    url: `/api/genre/details/${action.payload}`
  });
  yield put({
    type: "SET_GENRES",
    payload: response.data
  });
}






// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
      default:
        return state;
    }
}


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const reduxState = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={reduxState}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
