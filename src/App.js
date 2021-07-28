import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Call from './pages/Call/Call'

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/call-for-paper' component={Call} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
