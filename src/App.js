import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImgCarousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path='/' component={Home} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
