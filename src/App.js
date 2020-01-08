import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navbar from './components/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' conponent={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
