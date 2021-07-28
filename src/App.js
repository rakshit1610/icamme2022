import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Call from './pages/Call/Call'
import Keynote from './pages/Keynote/Keynote';
import Registration from './pages/Registration/Registration';
import Committee from './pages/Committee/Committee'

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/call-for-paper' component={Call} />
    <Route path='/keynote-speakers' component={Keynote} />
    <Route path="/registration" component={Registration} />
    <Route path='/committee' component={Committee} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
