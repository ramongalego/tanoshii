import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Anime from './Anime';
import AnimeDetails from './AnimeDetails';

const App = () => (
  <Router>
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/anime' component={Anime} />
        <Route path='/anime/:id' component={AnimeDetails} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>
    </div>
  </Router>
)

export default App;
