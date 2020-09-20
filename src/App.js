import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MovieList from './components/MovieList'
import VotingForm from './components/VotingForm'
import Results from './components/Results'
import LandingPage from './components/LandingPage'
import Voted from './components/Voted'
import ResultsWaiting from './components/ResultsWaiting'
import {MovieListProvider, MovieListContext} from './MovieListContext';
import AddMovieForm from './components/AddMovieForm'
import './Style.css'



function App() {

  return (
    <div className="App">
      <MovieListProvider>
        <Router>
          <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/list'>
            <AddMovieForm />
            <MovieList />
          </Route>
          <Route path='/voting'>
            <VotingForm />
          </Route>
          <Route path='/voted'>
            <Voted />
          </Route>
          <Route path='/results-wait'>
            <ResultsWaiting />
          </Route>
            <Route path='/results'>
              <Results />
            </Route>
          </Switch>
        </Router>
      </MovieListProvider>
    </div>
  );
}

export default App;
