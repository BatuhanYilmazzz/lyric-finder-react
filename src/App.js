import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LyricContextProvider from './context/LyricContext';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <LyricContextProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Main} />
            </Switch>
          </div>
        </div>
      </Router>
    </LyricContextProvider>
  );
}

export default App;
